function previous(url) {
  if (document.getElementById('iframe').src === url) {
    return;
  }
  document.getElementById('iframe').src = url;
}

function next(url) {
  if (document.getElementById('iframe').src === url) {
    return;
  }
  document.getElementById('iframe').src = url;
}