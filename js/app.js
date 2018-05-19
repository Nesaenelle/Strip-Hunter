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
            e.preventDefault();
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
    var createBtns = document.querySelectorAll('.js-create-order');
    var detailsBtns = document.querySelectorAll('.js-details-order');

    var ordersEmpty = document.querySelector('#orders__empty');
    var ordersTable = document.querySelector('#orders__table');
    var ordersDetails = document.querySelector('#orders__details');

    if (createBtns.length) {
        createBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                ordersEmpty.style.display = 'none';
                ordersTable.style.display = 'block';
            });
        });
    }

    if (detailsBtns.length) {
        detailsBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                ordersTable.style.display = 'none';
                ordersDetails.style.display = 'block';
            });
        });
    }
}());


(function() {
    var signInBtns = document.querySelectorAll('.js-sign-in');
    var signUpBtns = document.querySelectorAll('.js-sign-up');
    var remindBtns = document.querySelectorAll('.js-remind');
    var modalOverlay = document.querySelector('#modal-overlay');
    var modalSignIn = document.querySelector('#modal-sign-in');
    var modalSignUp = document.querySelector('#modal-sign-up');
    var modalRemind = document.querySelector('#modal-remind');
    var modals = document.querySelectorAll('.js-modal');
    var closeBtns = document.querySelectorAll('.js-close-modal');


    if (signInBtns.length) {
        signInBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                closeModals();
                modalOverlay.classList.remove('hidden');
                modalSignIn.classList.remove('hidden');
            });
        });
    }

    if (signUpBtns.length) {
        signUpBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                closeModals();
                modalOverlay.classList.remove('hidden');
                modalSignUp.classList.remove('hidden');
            });
        });
    }


    if (remindBtns.length) {
        remindBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                closeModals();
                modalOverlay.classList.remove('hidden');
                modalRemind.classList.remove('hidden');
            });
        });
    }

    if (closeBtns.length) {
        closeBtns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                closeModals();
            });
        });
    }

    window.addEventListener('click', function(e) {
        modals.forEach(function(modal) {
            if (!modal.classList.contains('hidden') && !modal.contains(e.target)) {
                modal.classList.add('hidden')
                modalOverlay.classList.add('hidden')
            }
        })

    }, false);

    function closeModals() {
        modals.forEach(function(modal) {
            modal.classList.add('hidden');
        })
        modalOverlay.classList.add('hidden');
    }
}());

(function() {
    var filter= document.querySelector('#search__content__filter');
    var btn  = document.querySelector('#toggle-filter'); 
    if(btn) {    
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (filter.classList.contains('hidden')) {
                filter.classList.remove('hidden');
                btn.classList.add('opened');
            } else {
                filter.classList.add('hidden');
                btn.classList.remove('opened');
            }

        });
    }
}());