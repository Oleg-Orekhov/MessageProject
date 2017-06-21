export class MainController {
  constructor ($http,$scope) {
    'ngInject';
      this.$scope = $scope;
      this.$http = $http;
      this.getMessages();
      $scope.filesUploaded = this.filesUploaded;
      //this.modalShown = false;
      //this.toggleModal = function() {
       // console.log('triggering');
       // this.modalShown = !this.modalShown;
      };

  
    getMessages() {
        var vm = this;
        this.$http.get('http://localhost:5000/api/user').then(function(result){
            vm.users = result.data;
        });
    }

    postMessage() {
        //this.$http.post('http://localhost:5000/api/message', {msg: this.message});
        var fd = new FormData();
        
        fd.append('email',this.email);
        fd.append('msg',this.message);
        console.log($scope.file);
        if (this.file){
            fd.append('image', this.file);
            console.log('file added');
        }
                
        this.$http.post('http://localhost:5000/api/user', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
            console.log('succesful');
        })
        .error(function(){
            console.log('fail');
        });
    }
    
    filesUploaded(elm){
        console.log(elm.files[0]);
        this.$scope.file = elm.files[0];
        this.$scope.$apply();
        console.log('file inputed');
    }

}
