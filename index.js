var recipes = {butter: '1 cup'};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  recipes = new Object();
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}