m.directive('flUi', function ($compile, palProperties, palSettings...) {
return {
    restrict: 'E',
    replace: false,
    priority: 10,
    scope: true,
    
    controller: function ($scope, $element) {
        var classes;
        palProperties.initProperties($scope);

        classes = ... // init to {style: [], ui: []}

        this.addClass = function (type, value) {
           ...
        };

        /* for inner properties */
        this.addProperty = function (property, value, lang) {
            palProperties.setProperty($scope, property, value, lang);
        };
    },
    
    compile: function ($tElement, $tAttrs) {
        var el = $tElement[0];
        if (el.getAttribute('fl:type')) {
            el.removeAttribute('fl:type');
            //key to trigger new directives. adds the new syntax!
            el.setAttribute('fl:' + $tAttrs.flType, ''); 

            var postLink = function (scope, element, attrs) {
                /*
                    inner properties are read in the corresponding directive
                    and have higher priority than inline properties.

                    inline properties are read here
                */

                if (attrs.flX && !palProperties.getProperty(scope, 'x')) {
                    palProperties.setProperty(scope, 'x', attrs.flX);
                }

                /* accumulates the CSS classes */
                scope.classes.ui.push('fl-' + attrs.flType);
                $compile(element)(scope);
            };
            
            return  postLink;
        }
    }
};
});
