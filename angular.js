var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http, $q) {
    $q.all([
        $http.get('http://localhost:3001/get1'),
        $http.get('http://localhost:3001/get2')
    ])
        .then(() => $http.get('http://localhost:3001/get3'))
        .then((response) =>
            $scope.myWelcome = response.data);
});