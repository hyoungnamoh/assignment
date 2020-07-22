function login(newWindow) {
    var windowName = '로그인';
    var winW = 500;
    var winH = 350;
    var newWinW = (screen.width - winW) / 2;
    var newWinH = (screen.height - winH) / 2;
    var options = 'width =' + winW + ',height = ' + winH + ', left = ' + newWinW + ',top = ' + newWinH;

    window.open(newWindow, windowName, options);
}