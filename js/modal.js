(function() {
    var btn = document.querySelector('#go-top');

    btn.addEventListener('click', function() {
    
        var interval = window.setInterval(function() { 
            var scrollTop = document.documentElement.scrollTop;
            if(scrollTop <= 0) {
                clearInterval(interval);
            } else {
                window.scrollTo(0, scrollTop - 15);
            }
        });
    }, false);

}());

(function() {
    var menuBtn = document.querySelector('#main-menu');
    var menuContainer = document.querySelector('#main-menu-container');
    // var closeBtn = document.querySelector('#main-menu-close');

    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        menuContainer.classList.add('opened');
    }, false);

    // closeBtn.addEventListener('click', function(e) {
    //     e.stopPropagation();
    //     menuContainer.classList.remove('opened');
    // }, false);

    window.addEventListener('click', function(e) {
        if (!menuContainer.contains(e.target)) {
            menuContainer.classList.remove('opened');
        }
    }, false);

}());