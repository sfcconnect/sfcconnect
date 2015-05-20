'use strict';

angular.module('connectApp')
.controller('MapCtrl', function ($scope) {

    $scope.categories = [
        'IT',
        'メディア',
        'デザイン',
        '経営',
        '身体知',
        '経済',
        '哲学',
        '教育',
        '社会',
    ];

    $scope.showingChart = true;

    $scope.toggleChart = function () {
        $scope.showingChart = !($scope.showingChart);
    };

    $scope.pieData = [113,100,50,28,27];

    $scope.users = [
        {
            data: [100, 100, 100],
            x: 500,
            y: 250
        }
    ];

    function getRandomInt(min, max) {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    $scope.getRandomInt = getRandomInt;

    for (var i = 0; i < 20; i++) {
        var data = [];
        var count = getRandomInt(0, 5);
        for (var j = 0; j < count; j++) {
            data.push(100);
        }
        $scope.users.push({
            data: data,
            x: getRandomInt(0, 900) + 50,
            y: getRandomInt(0, 400) + 50
        });
    }

    $scope.getPiePath = function (pieData, cX, cY, R) {
        var total = $scope.pieData.reduce(function (a, b) { return a + b; }, 0);
        var angles = $scope.pieData.map(function (a) { return a / total * 360.0; });
        var startAngles = angles.map(function (a, i) { return angles.slice(0, i).reduce(function (a, b) { return a + b; }, 0); });
        return startAngles.map(
            function (startAngle, i) {
                var endAngle = startAngle + angles[i];

                var x1 = parseInt(cX + R * Math.cos(Math.PI * startAngle / 180));
                var y1 = parseInt(cY + R * Math.sin(Math.PI * startAngle / 180));

                var x2 = parseInt(cX + R * Math.cos(Math.PI * endAngle / 180));
                var y2 = parseInt(cY + R * Math.sin(Math.PI * endAngle / 180));

                return 'M'+ cX + ',' + cY + ' L' + x1 + ',' + y1 + ' A' + R + ',' + R + ' 0 0,1 ' + x2 + ',' + y2 + ' z';
            }
        );
    };

    $scope.getRandomColor = function () {
        var colors = [
            'red',
            'blue',
            'green',
            'pink',
            'yellow',
            'purple',
            'orange',
            'spring',
            'teal',
            'cyan',
            'azure',
            'violet',
            'magenta'
        ];

        return colors[getRandomInt(0, colors.length - 1)];
    };
});
