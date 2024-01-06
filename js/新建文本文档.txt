
    function autoPlay() {
     
        function musicInBrowserHandler() {
            audioToggle(true);
            document.body.removeEventListener('touchstart', musicInBrowserHandler);
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler);

      
        function musicInWeixinHandler() {
            audioToggle(true);
            document.addEventListener('WeixinJSBridgeReady', function() {
                audioToggle(true);
            }, false);
            document.addEventListener('YixinJSBridgeReady', function() {
                audioToggle(true);
            }, false);
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    autoPlay();


    function audioToggle(isPlay) {
        var playBtn = document.getElementById('play_btn');
        var audio = playBtn.getElementsByTagName('audio')[0];

        if (typeof(isPlay) == 'undefined') {
            isPlay = !!audio.paused;
        }

        var space = String.fromCharCode(32); // 绌烘牸
        var playBtnClass = space + (playBtn.getAttribute('class') || (isPlay ? 'play' : 'pause')) + space;
        if (isPlay) {
            playBtnClass = playBtnClass.replace(space + 'pause' + space, space + 'play' + space);
            audio.play();
        } else {
            playBtnClass = playBtnClass.replace(space + 'play' + space, space + 'pause' + space);
            audio.pause();
        }
        playBtn.className = playBtnClass.replace(/(^\s*)|(\s*$)/g, '');
    }

    document.getElementById('play_btn').onclick = function() {
        audioToggle();
    }