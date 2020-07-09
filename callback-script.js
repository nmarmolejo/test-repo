let counter = 3;

window.onload = function() {
  document.getElementById("counter").innerHTML = counter.toString() + ' segundos' ;
}

setInterval(function() {

  if (counter === 0) {
    return;
  }

  counter -= 1;

  let counterMessage;
  if (counter === 1) {
    counterMessage = counter.toString() + ' segundo';
  } else {
    counterMessage = counter.toString() + ' segundos';
  }
  document.getElementById("counter").innerHTML = counterMessage;

  if (counter === 0) {
    document.getElementById('reload-button').style.display = 'inline-block';
    document.getElementById('counter').style.display = 'none';
  }
}, 1000);

function reloadPage() {
  window.location.reload();
}
