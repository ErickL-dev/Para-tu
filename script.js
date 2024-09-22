$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var flowerInterval; 

    
    envelope.click(function() {
        open();
    });

    
    btn_open.click(function() {
        open();
    });

  
    btn_reset.click(function() {
        close();
        clearInterval(flowerInterval);
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
