var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(key, value);
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  
}

