export function ModalDialog() {
    'ngInject'
    return {
        restrict: 'E',
        scope: {
          show: '='
        },
        //replace: true, // Replace with the template below
        //transclude: true, // we want to insert custom content inside the directive
        link: function(scope, element, attrs) {
          scope.show = true;
          console.log('url works');
          scope.dialogStyle = {};
        
          if (attrs.width)
            scope.dialogStyle.width = attrs.width;
          if (attrs.height)
            scope.dialogStyle.height = attrs.height;
          this.hideModal = function() {
              console.log('hideModal');
            scope.show = false;
          };
        },
        
        templateUrl:  "app/directives/modalDialog.html"
  };
}
