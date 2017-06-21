export function fileInputDirective($parse) {
    'ngInject'  
    return {
        restrict:'A',
        link: function (scope, el, attrs) {
            el.bind('change', function () {
                $parse(attrs.fileInput)
                .assign(scope,el[0].files)
                scope.$apply(); 
                //var file = event.target.files[0];
                //scope.file = file ? file : undefined;
                //.$apply();
            });
        }
    }
}