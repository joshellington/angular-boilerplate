angular.module('myApp.services', [])

.factory('ExampleService', function($http, $q) {
  var data = {};
  var url = 'http://ip.jsontest.com';

  function getIp() {
    var request = $http({
      method: 'get',
      url: url
    });

    function handleSuccess(d, status, headers) {
      data = d.data;
      return data;
    }

    function handleError() {
      console.log('Fetch: Error retrieving data from ' + url);
    }

    return(request.then(handleSuccess, handleError));
  }

  return {
    getIp: getIp
  }
});