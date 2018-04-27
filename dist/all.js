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
            contents.forEach(function(content) {
                content.style.display = content.getAttribute('data-id') == id ? 'block' : 'none';
            })

        }, false);
    })


}());

(function() {
    var btnTable = document.querySelector('#notificaions-table-btn');
    var btnSettings = document.querySelector('#notificaions-settings-btn');
    var table = document.querySelector('.profile__notifications__table');
    var settings = document.querySelector('.profile__notifications__settings');
    if (btnTable && btnSettings) {
        btnTable.addEventListener('click', function(e) {
            table.style.display = 'none';
            settings.style.display = 'block';
        });
        btnSettings.addEventListener('click', function(e) {
            table.style.display = 'block';
            settings.style.display = 'none';
        });
    }
}());

(function() {
    var createBtn = document.querySelector('#create-order');
    var detailsBtn = document.querySelector('#details-order');

    var ordersEmpty = document.querySelector('#orders__empty');
    var ordersTable = document.querySelector('#orders__table');
    var ordersDetails = document.querySelector('#orders__details');

    if (createBtn) {
        createBtn.addEventListener('click', function(e) {
            ordersEmpty.style.display = 'none';
            ordersTable.style.display = 'block';
        });
    }

    if (detailsBtn) {
        detailsBtn.addEventListener('click', function(e) {
            ordersTable.style.display = 'none';
            ordersDetails.style.display = 'block';
        });
    }
}());