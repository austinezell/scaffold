(function(){
  'use strict';
  angular.module('scaffold')
  .controller('homeCtrl', homeCtrl);

  function homeCtrl(){

    let vm = this;
    console.log(vm);
    vm.location ={};

  }
})()
