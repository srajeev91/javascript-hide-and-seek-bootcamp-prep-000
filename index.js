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
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n);
  }
}

function deepestChild() {
  var grandNode = document.getElementById('grand-node');
  var theChild = grandNode.children[0];
  
  while(theChild) {
    grandNode = theChild;
    theChild = grandNode.children[0];
  }
}