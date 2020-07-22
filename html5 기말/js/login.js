function movePage() {
    console.log(window.parent);
    opener.parent.location.href = 'home.html';
    window.close();
}