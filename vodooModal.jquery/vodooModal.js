(function ($) {
    var isOverlay = false;
    var $overlay = $('<div>').attr('id', 'vodooModalOverlay');
    $.vodooModal = function (element, options) {

        var defaults = {
            openWith: null,
            closeWith: null,
            animation: null,
            onOpen: function () {
            },
            onClose: function () {
            }
        };

        var plugin = this;

        plugin.settings = {};

        var $element = $(element),
                element = element;

        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);
            createOverlay();
            createVodooModal($element);
            $(plugin.settings.openWith).on('click', function (e) {
                e.preventDefault();
                plugin.open();
            });
            $overlay.on('click', function () {
                plugin.close();
            });
            $(plugin.settings.closeWith).on('click', function () {
                plugin.close();
            });
        };

        plugin.open = function () {
            $overlay.addClass('open');
            $element.addClass('open');
            $(plugin.settings.closeWith).addClass('open');
            $('body').addClass('unscrollable');
            callBack('onOpen');
        };

        plugin.close = function () {
            $overlay.removeClass('open');
            $element.removeClass('open');
            $(plugin.settings.closeWith).removeClass('open');
            $('body').removeClass('unscrollable');
            callBack('onClose');
        };

        var createVodooModal = function ($el) {
            $el.addClass('vodooModal').addClass(plugin.settings.animation);
            $(plugin.settings.closeWith).addClass(plugin.settings.animation).addClass('closeVodooModal');
        };
        
        var createOverlay = function () {
            if (isOverlay)
                return;
            $('body').append($overlay);
            isOverlay = true;
        };
        
        var callBack = function(func){
            if (typeof plugin.settings[func] === 'function' && plugin.settings[func] !== '') {
                 return plugin.settings[func]();
            }
            else{
                throw new Error('callback not a function');
            }
        };

        plugin.init();

    };

    $.fn.vodooModal = function (options) {

        return this.each(function () {
            if (undefined == $(this).data('vodooModal')) {
                var plugin = new $.vodooModal(this, options);
                $(this).data('vodooModal', plugin);
            }
        });

    };

})(jQuery);