/*!
 * this.js
 * Version: 2.0.0
 * Like a Paralaxx effect but not ;)
 * Author: Felipe Venturino
 * Github: https://github.com/fripixel
 * Site: http://www.fripixel.com.br/
 */
;
(function($, window, document, undefined) {

    "use strict";

    // Create the defaults once
    var pluginName = "paradoxx",
        defaults = {
            'position': 0, //0: normal, 1: invertido
            'offset': 10,
            'position': 1, //cima
            'velocity': '0.6s',
            'delay': '0.1s',
            'ease': 'ease-in-out',
            'opacity': 1,
            'debug': false,
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {

        init: function() {

            var self = this;

            var element = $(this.element);

            var height = 0;

            var src = element.find(".paradoxx__image").data("src");

            //remove o src da imagem
            element.find(".paradoxx__image").data("src", "");

            var image = element.find(".paradoxx__image");

            var delay = this.settings.delay;

            var velocity = this.settings.velocity;

            var opacity = this.settings.opacity;

            var ease = this.settings.ease;

            image.css({
                "background-image": "url(" + src + ")",
                "transition": "all " + velocity + " " + delay + " " + ease,
                "opacity": opacity,
            });

            this.scroll(element);

        },

        scroll: function(element) {

            var iScrollPos = 0;

            var self = this;

            $(window).on("scroll", function(e) {

                var image = element.find(".paradoxx__image");

                var elementHeight = element.height();
                var elementScrollTop = element.position().top + element.find(".paradoxx__image").position().top;

                var windowScrollTop = $(document).scrollTop();

                var iCurScrollPos = windowScrollTop;

                var counter = image.position().top;

                counter = parseInt(counter);

                var css = {};

                if (iCurScrollPos > iScrollPos) {
                    if ((windowScrollTop >= (elementScrollTop - elementHeight)) && (windowScrollTop <= (elementScrollTop + elementHeight))) {
                        //Scrolling Down
                        css = self.moveBackground(counter, true);
                    }

                } else {
                    if ((windowScrollTop >= (elementScrollTop - elementHeight)) && (windowScrollTop <= (elementScrollTop + elementHeight))) {
                        //Scrolling Up
                        css = self.moveBackground(counter, false);
                    }
                }

                image.css(css);

                iScrollPos = iCurScrollPos;
            });
        },

        moveBackground: function(counter, up) {

            var calc = this.getCalc(counter, up);

            var css = {};

            var newValue = counter + calc;

            if(this.settings.debug) {
              console.log("counter:" + counter + " calc:" + calc + " newValue: " + newValue);
            }

            css["top"] = this.unity(newValue);

            return css;
        },

        getCalc: function(counter, up) {
            //normal 0
            var multiply = (up) ? 1 : -1;

            if(this.settings.position){
              multiply = (up) ? -1 : 1;
            }

            var offset = this.settings.offset;
            var calc = (offset) * multiply;
            return parseInt(calc);
        },

        unity: function(value, unity) {
            unity = (unity != undefined) ? unity : "px";
            return value + unity;
        },

        removeUnity: function(value) {
            var newValue = value.replace("%", "");
            newValue = newValue.replace("px", "");
            newValue = newValue.replace("em", "");
            newValue = newValue.replace("rem", "");
            return newValue;
        }

    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);