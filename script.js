$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var flowerInterval; 

    var audio = $('audio')[0];  // Selecciona el elemento de audio

    envelope.click(function() {
        open();
        audio.play();  // Reproduce el audio al hacer clic
    });

    btn_open.click(function() {
        open();
        audio.play();  // Reproduce el audio al hacer clic en el botón
    });

    btn_reset.click(function() {
        close();
        clearInterval(flowerInterval);
        audio.pause();  // Detiene el audio al resetear
        audio.currentTime = 0;  // Reinicia el audio al principio
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        startFlowerLoop(); 
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }

    function startFlowerLoop() {
        flowerInterval = setInterval(function() {
            createFlower(); 
        }, 1000); 
    }

    function createFlower() {
        var flower = $('<img src="flor.png" class="flower">');
        flower.css({
            position: 'absolute',
            top: Math.random() * window.innerHeight + 'px', 
            left: Math.random() * window.innerWidth + 'px',  
            width: '50px',
            height: '50px',
            opacity: 0
        });
        $('body').append(flower);
        flower.animate({
            opacity: 1,
            top: '-100px' 
        }, 4000, function() {
            flower.remove(); 
        });
    }
});
