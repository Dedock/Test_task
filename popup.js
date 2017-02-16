var Modal = (function () {

    var modalOpen = document.querySelector('[data-modal="open"]'),
        modalClose = document.querySelector('[data-modal="close"]'),
        modalWrapper = document.querySelector('[data-modal="wrapper"]');

    return {
        init: function () {
            this.open();
            this.close();
        },

        open: function () {
            modalOpen.onclick = function (e) {
                e.preventDefault;
                modalWrapper.classList.add("modal-opened");
            }
        },

        close: function () {
            modalClose.onclick = function (e) {
                e.preventDefault;
                modalWrapper.classList.remove("modal-opened");
            }
        }
    }
}());

Modal.init();
