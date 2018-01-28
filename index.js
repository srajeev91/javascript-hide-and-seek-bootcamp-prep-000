function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const idNested = document.getElementById('nested');
  idNested.getElementsByClassName('target');
}