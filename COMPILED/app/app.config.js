(function () {
    angular
        .module("spaceApp")
        .config(MyAppConfig);
    MyAppConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function MyAppConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/views/home.html',
                controller: 'MacroCtrl',
                controllerAs: 'ctrl',
            })
            .state('calc', {
                url: '/calc',
                templateUrl: '/app/views/calc.html',
                controller: 'MicroCtrl',
                controllerAs: 'ctrl'
            });

        $urlRouterProvider.otherwise("/home");
    }
})();