var recipes = {butter: '1 cup'};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(key, value);
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  
}

