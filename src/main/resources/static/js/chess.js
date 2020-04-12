history.pushState(null, null, location.href);

window.onpopstate = function(event) {
  history.go(1);
};

function unload() {
  if (self.screenTop > 9000) {
    // 브라우저 닫힘
  } else {
    if (document.readyState === "complete") {
      // 새로고침
      reloadChessBoard();
    }
  }
}

function reloadChessBoard() {
  let form = document.createElement('form');
  form.setAttribute('method', 'get');
  form.setAttribute('action', '/');
  document.charset = "utf-8";

  document.body.appendChild(form);
  form.submit();
}

window.onload = function() {
  let squares = document.getElementsByClassName('square');

  for (let square of squares) {
    setSquareOnClick(square);
  }
};

function setSquareOnClick(square) {
  square.onclick = function () {
    let fromPositionInput = document.getElementById('from-position');
    let toPositionInput = document.getElementById('to-position');

    if (isEmpty(fromPositionInput)) {
      setFromPositionWith(square.id);
      return;
    }
    if (!isEmpty(fromPositionInput) && !isEmpty(toPositionInput)) {
      resetFromToPositions();
      setFromPositionWith(square.id);
      return;
    }
    if (!isEmpty(fromPositionInput) && isEmpty(toPositionInput)) {
      setToPositionWith(square.id);
    }
  }
}

function isEmpty(tag) {
  return tag.value === null || tag.value === "";
}

function setFromPositionWith(position) {
  document.getElementById('from-position').value = position;
}

function setToPositionWith(position) {
  document.getElementById('to-position').value = position;
}

function resetFromToPositions() {
  setFromPositionWith("");
  setToPositionWith("");
}
