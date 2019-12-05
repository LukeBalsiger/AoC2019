const _ = require("lodash");
const three = require("three");

exports.calculate = (wire1, wire2) => {
  let wireInput1 = splitInput(wire1);
  let wireInput2 = splitInput(wire2);
  let wire1Vector = parseInputToVectors(wireInput1);
  let wire2Vector = parseInputToVectors(wireInput2);
  let wire1Coordinates = calculateCoordinateArrayOfWire(wire1Vector);
  let wire2Coordinates = calculateCoordinateArrayOfWire(wire2Vector);
  let intersections = getCoordinateIntersections(
    wire1Coordinates,
    wire2Coordinates
  );
  return getMinDistance(wire1Coordinates, wire2Coordinates, intersections);
};

const getMinDistance = (coords1, coords2, intersections) => {
  let min;
  for (let i = 0; i < intersections.length; i++) {
    let distance1 = _.findIndex(
      coords1,
      a => a[0] === intersections[i][0] && a[1] === intersections[i][1]
    );
    let distance2 = _.findIndex(
      coords2,
      a => a[0] === intersections[i][0] && a[1] === intersections[i][1]
    );
    if (i === 0) {
      min = distance1 + distance2;
    } else if (distance1 + distance2 < min) {
      min = distance1 + distance2;
    }
  }
  return min;
};

const calculateCoordinateArrayOfWire = vectorArray => {
  let coordinateArray = [[0, 0]];
  for (let i = 0; i < vectorArray.length; i++) {
    let newVals = convertVectorToCoordinates(coordinateArray, vectorArray[i]);
    coordinateArray = _.concat(coordinateArray, newVals);
  }
  return coordinateArray;
};

const getCoordinateIntersections = (coords1, coords2) => {
  let intersections = [];
  let longer = coords1.length >= coords2 ? coords1 : coords2;
  let shorter = coords1.length >= coords2 ? coords2 : coords1;
  for (let i = 1; i < longer.length; i++) {
    if (
      _.findIndex(
        shorter,
        a => a[0] === longer[i][0] && a[1] === longer[i][1]
      ) !== -1
    ) {
      intersections.push(longer[i]);
    }
  }
  return intersections;
};

const splitAt = index => x => [x.slice(0, index), x.slice(index)];

const parseInputToVectors = wire => {
  const arr = [];
  for (let i = 0; i < wire.length; i++) {
    let direction = splitAt(1)(wire[i])[0];
    let length = splitAt(1)(wire[i])[1];
    let vector = new three.Vector2();
    switch (direction) {
      case "R":
        vector.setX(1);
        break;
      case "U":
        vector.setY(1);
        break;
      case "L":
        vector.setX(-1);
        break;
      case "D":
        vector.setY(-1);
        break;
    }
    vector.multiplyScalar(parseInt(length));
    arr.push(vector);
  }
  return arr;
};

const convertVectorToCoordinates = (startingCoordinateArray, vector) => {
  let coordinates = [];
  coordinates.push(startingCoordinateArray[startingCoordinateArray.length - 1]);
  let numCoords = vector.length();
  for (let i = 0; i < numCoords; i++) {
    let next = Object.assign([], coordinates[i]);
    next[0] = next[0] + vector.normalize().x;
    next[1] = next[1] + vector.normalize().y;
    coordinates.push(next);
  }
  coordinates.shift();
  return coordinates;
};

const splitInput = wire => {
  return wire[0].split(",");
};
