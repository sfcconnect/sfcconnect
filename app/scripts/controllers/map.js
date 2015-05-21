'use strict';

angular.module('connectApp')
.controller('MapCtrl', function ($scope) {

    $scope.categories = [
        'カテゴリーを選択',
        'メディア',
        'デザイン',
        '経営',
        '身体知',
        '経済',
        '哲学',
        '教育',
        '社会',
        'IT',
    ];

    function getRandomColor() {
        var rgb = hsvtorgb(getRandomInt(0, 360), 128, 255);
        var r = rgb.r.toString(16).length === 1 ? '0' + rgb.r.toString(16) : rgb.r.toString(16);
        var g = rgb.g.toString(16).length === 1 ? '0' + rgb.g.toString(16) : rgb.g.toString(16);
        var b = rgb.b.toString(16).length === 1 ? '0' + rgb.b.toString(16) : rgb.b.toString(16);
        return '#' + r + g + b;
    }


    function getRandomInt(min, max) {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    }

    $scope.users = [
        {
            id: getRandomInt(0, 255),
            data: [100, 100, 100],
            x: 500,
            y: 250,
            colors: [getRandomColor(), getRandomColor(), getRandomColor()]
        }
    ];

    $scope.getRandomInt = getRandomInt;


    for (var i = 0; i < 20; i++) {
        var data = [], colors = [];
        var count = getRandomInt(3, 6);
        for (var j = 0; j < count; j++) {
            data.push(100);
            colors.push(getRandomColor());
        }
        $scope.users.push({
            id: getRandomInt(0, 255),
            data: data,
            x: getRandomInt(0, 900) + 50,
            y: getRandomInt(0, 400) + 50,
            colors: colors
        });
    }

    $scope.getPiePath = function (data, cX, cY, R, selected) {
        selected = isNaN(selected) ? 0 : selected;
        // selected = 1;
        // R = R + R * selected;
        var total = data.reduce(function (a, b) { return a + b; }, 0);
        var angles = data.map(function (a) { return a / total * 360.0; });
        var startAngles = angles.map(function (a, i) { return angles.slice(0, i).reduce(function (a, b) { return a + b; }, 0); });
        return startAngles.map(
            function (startAngle, i) {
                var endAngle = startAngle + angles[i];
                var halfAngle = (startAngle + endAngle) / 2;
                var x1 = parseInt(cX + R * Math.cos(Math.PI * startAngle / 180) + selected * R * Math.cos(Math.PI * halfAngle / 180));
                var y1 = parseInt(cY + R * Math.sin(Math.PI * startAngle / 180) + selected * R * Math.sin(Math.PI * halfAngle / 180));
                var x2 = parseInt(cX + R * Math.cos(Math.PI * endAngle / 180) + selected * R * Math.cos(Math.PI * halfAngle / 180));
                var y2 = parseInt(cY + R * Math.sin(Math.PI * endAngle / 180) + selected * R * Math.sin(Math.PI * halfAngle / 180));
                return 'M'+ cX + ',' + cY + ' L' + x1 + ',' + y1 + ' A' + R + ',' + R + ' 0 0,1 ' + x2 + ',' + y2 + ' z';
            }
        );
    };

    function hsvtorgb (h, s, v) {
        var r, g, b;
        while (h < 0) {
            h += 360;
        }
        h = h % 360;

        if (s === 0) {
            v = Math.round(v);
            return {'r': v, 'g': v, 'b': v};
        }

        s = s / 255;

        var i = Math.floor(h / 60) % 6,
        f = (h / 60) - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s);

        switch (i) {
            case 0 :
            r = v;  g = t;  b = p;  break;
            case 1 :
            r = q;  g = v;  b = p;  break;
            case 2 :
            r = p;  g = v;  b = t;  break;
            case 3 :
            r = p;  g = q;  b = v;  break;
            case 4 :
            r = t;  g = p;  b = v;  break;
            case 5 :
            r = v;  g = p;  b = q;  break;
        }

        return {'r': Math.round(r), 'g': Math.round(g), 'b': Math.round(b)};
    }

});
