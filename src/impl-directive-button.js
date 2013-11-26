cm.directive('flButton', function ($compile, palProperties...) {
return {
    template: '<a ng-controller="ActionCtrl" 
        ng-click="executeActions(clickchain)"
        ng-href="{{ href }}" ng-class="lclass"
        target="{{ target }}"  style="{{ style }}">
           <div class="fl-overlay"  style="{{ overlaystyle }}"></div>
           <div class="caption-container">
               <div class="fl-caption" ng-bind-html="caption"></div>
           </div>
        </a>',
        
    link: function (scope, element, attrs) {
        scope.href = '';
        scope.target = '_self';

        var e = angular.element('<div />');
        var cc =  palProperties.getProperty(scope, 'caption');
        
        scope.caption = e.html(cc).text();
        scope.style = palProperties.toCSS(scope);
        scope.overlaystyle =  palProperties.toCSS(scope, 'overlay');
        scope.clickchain = palProperties.getProperty(scope, 'clickchain');
        scope.lclass = scope.classes.style.concat(scope.classes.ui[0]);

        // highlight button for current URL
        if (scope.clickchain ...) {
            scope.lclass.unshift('highlight');
        }
    }
};
});
