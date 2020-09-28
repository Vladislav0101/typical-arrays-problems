const { sort } = require("semver");

exports.min = function min(array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
}

exports.max = function max(array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
}

exports.avg = function avg(array) {
    if (!array || array.length == 0) {
        return 0;
    } else {
        return (array.length === 0) || (!array) ? 0 : array.reduce((sum, current) => (sum + current), 0) / array.length;
    }
}