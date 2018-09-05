var recipes = {butter: '1 cup'};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({recipes}, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  
}

//var newObj = Object.assign(key, value);
//  return recipes;