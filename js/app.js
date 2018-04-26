(function() {
    var btn = document.querySelector('#go-top');

    if (btn) {
        btn.addEventListener('click', function() {

            var interval = window.setInterval(function() {
                var scrollTop = document.documentElement.scrollTop;
                if (scrollTop <= 0) {
                    clearInterval(interval);
                } else {
                    window.scrollTo(0, scrollTop - 15);
                }
            });
        }, false);
    }

}());

(function() {
    var menuBtn = document.querySelector('#main-menu');
    var menuContainer = document.querySelector('#main-menu-container');

    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        menuContainer.classList.add('opened');
    }, false);

    window.addEventListener('click', function(e) {
        if (!menuContainer.contains(e.target)) {
            menuContainer.classList.remove('opened');
        }
    }, false);

}());

(function() {
    var customTabs = document.querySelectorAll('.custom-tabs__item[data-id]');

    customTabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.stopPropagation();
            var id = this.getAttribute('data-id');
            customTabs.forEach(function(tab) { tab.classList.remove('active') })
            this.classList.add('active');
            var contents = document.querySelectorAll('.custom-tabs__content__item[data-id]');
            contents.forEach(function(content){
                content.style.display = content.getAttribute('data-id') == id ? 'block' : 'none';
            })

        }, false);
    })


}());