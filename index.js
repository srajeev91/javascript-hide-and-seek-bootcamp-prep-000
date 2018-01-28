function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const idNested = document.getElementById('nested');
  return idNested.getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    
  }
}