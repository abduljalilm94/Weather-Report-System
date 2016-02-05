var app = angular.module('WeatherSystem', []);

app.controller('BodyCtrl', function ($scope, AppService) {
    $scope.getReport = function () {
        var day = $('#date_day').val();
        var month = $('#date_month').val();
        var year = $('#date_year').val();
        $scope.id = $('#location_id').val();
        $scope.date = year + '-' + month + '-' + day;
		$scope.date_label = $( "#date_month option:selected" ).text() + $( "#date_day option:selected" ).text() + ', ' + $( "#date_year option:selected" ).text();;
		$scope.loc_label = $( "#location_id option:selected" ).text();

        var params = {
            location: $scope.id,
            date: $scope.date
        }
        $.post("php/fetch_details.php", params, function (res) {
            AppService.setDetails(JSON.parse(res));
            getService();
            $scope.$apply();
        })
    }
    $scope.loc = [];
    $scope.date = "";
    $scope.id = "";
	$scope.date_label = "";
	$scope.loc_label = "";
    function getService() {
        $scope.loc = AppService.getLoc();
        $scope.details = AppService.getDetails();
    }
    function init() {
        $.get("php/fetch_location.php", function (res) {
            AppService.setLoc(JSON.parse(res));
            getService();
            $scope.$apply();
        })
    };
    init();
});

app.service('AppService', function () {
    var loc = [];
    var details = { "id": 0, "date": '---', "max_temp": '---', "mean_temp": '---', "min_temp": '---', "humidity": '---', "pressure": '---', "visibility": '---', wind_speed: '---', prec: '---', events: '---'};
    this.setLoc = function (array) {
        loc = array;
    }
    this.getLoc = function () {
        return loc;
    }
    this.setDetails = function (obj) {
        details = obj;
    }
    this.getDetails = function () {
        return details;
    }
});



(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
			
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);