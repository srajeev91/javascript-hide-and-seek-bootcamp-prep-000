function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const idNested = document.getElementById('nested')[0];
  return idNested.getElementsByClassName('target')[0];
}