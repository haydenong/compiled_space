(function () {
    angular.module("spaceApp")
        .controller("MacroCtrl", MacroCtrl);

    function MacroCtrl($http, $scope, Service) {

        var vm = this;
        var sortedRad = [];

        vm.radiation = Service.radiation;
        vm.sunrise = Service.sunrise;
        vm.sunset = Service.sunset;
        vm.dailyAveRad = Service.dailyAveRad; // array that holds ave irradiance per day
        rad = vm.radiation;

        vm.totalEnergyOP = rad.map(function (rad) {
            return (rad.radiation * 0.2 * markerCount);
        });
        total = function (value) {
            return (value.radiation * 0.2 * markerCount);
        }
        // Radiation gauge
        vm.g = new JustGage({
            id: "gauge",
            value: vm.dailyAveRad[0].rad,
            min: 0,
            max: 1750,
            title: "Solar Radiation",
            label: "Irradiance (W/m^2)"
        });

        vm.today = {
            date: 0
        };
        vm.currentIndex;
        vm.updateIndex = function () {
            vm.currentIndex = 30 - vm.today.date;
            vm.g.refresh(vm.dailyAveRad[vm.today.date - 1].rad);
        }
        vm.activatedThin = false;
        vm.activatedMono = false;
        vm.activatedPoly = false;

        vm.activateThin = function () {
            if (!vm.activatedThin) {
                vm.activatedThin = true;
                vm.activatedMono = false;
                vm.activatedPoly = false;
            }
        };

        vm.activatePoly = function () {
            if (!vm.activatedPoly) {
                vm.activatedThin = false;
                vm.activatedMono = false;
                vm.activatedPoly = true;
            }
        };

        vm.activateMono = function () {
            if (!vm.activatedMono) {
                vm.activatedThin = false;
                vm.activatedMono = true;
                vm.activatedPoly = false;
            }
        }
    }


    MacroCtrl.$inject = ["$http", "$scope", "Service"];
})();