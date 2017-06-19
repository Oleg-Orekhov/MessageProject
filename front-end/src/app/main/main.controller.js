export class MainController {
  constructor ($http) {
    'ngInject';

      this.$http = $http;
      this.getMessages();
      this.modalShown = false;
      this.toggleModal = function() {
        console.log('triggering');
        this.modalShown = !this.modalShown;
      };

  }
    getMessages() {
        var vm = this;
        this.$http.get('http://localhost:5000/api/message').then(function(result){
            vm.messages = result.data;
        });
    }

    postMessage() {
        //this.$http.post('http://localhost:5000/api/message', {msg: this.message});
        var fd = new FormData();
        //fd.append('file', myFile);
        //fd.append('msg',this.message);
        this.$http.post('http://localhost:5000/api/message', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        })
        .error(function(){
        });
    }

}
