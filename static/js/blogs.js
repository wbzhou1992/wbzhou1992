if (!Number.prototype.toDateTimeString) {
    var replaces = {
        "yyyy": function (dt) {
            return dt.getFullYear().toString();
        },
        "yy": function (dt) {
            return (dt.getFullYear() % 100).toString();
        },
        "MM": function (dt) {
            var month = dt.getMonth() + 1;
            return month < 10 ? '0' + month : month.toString();
        },
        "M": function (dt) {
            var month = dt.getMonth() + 1;
            return day.toString();
        },
        "dd": function (dt) {
            var day = dt.getDate();
            return day < 10 ? '0' + day : day.toString();
        },
        "d": function (dt) {
            var day = dt.getDate();
            return day.toString();
        },
        "hh": function (dt) {
            var hour = dt.getHours();
            return hour < 10 ? '0' + hour : hour.toString();
        },
        "h": function (dt) {
            var hour = dt.getHour();
            return hour.toString();
        },
        "mm": function (dt) {
            var minute = dt.getMinutes();
            return minute < 10 ? '0' + minute : minute.toString();
        },
        "m": function (dt) {
            var minute = dt.getMinutes();
            return minute.toString();
        },
        "ss": function (dt) {
            var second = dt.getSeconds();
            return second < 10 ? '0' + second : second.toString();
        }
    };
    var token = /([a-zA-Z]+)/;
    Number.prototype.toDateTimeString = function (format) {
        var fmt = format || "yyyy-MM-dd hh:mm:ss";
        var dt = new Date(this);
        var arr = fmt.split(token);
        for (var i = 0; i < arr.length; i++) {
            var s = arr[i];
            if (s && s in replaces) {
                arr[i] = replaces[s](dt);
            }
        }
        return arr.join('');
    }
}

