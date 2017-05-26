var moment = require('moment');

module.exports = function(request) {
    var naturalStamp = null, unixStamp = null;

    if(isNaN(request) && moment(request).isValid()){
        console.log("Not a Number");
        naturalStamp = moment(request).format('MMMM DD, YYYY');
        unixStamp = Number(moment(request).format('X'));
    } else if(!isNaN(request)) {
        console.log("A number");
        unixStamp = Number(moment.unix(request).format('X'));
        naturalStamp = moment.unix(request).format('MMMM DD, YYYY');
    }

    var stampsObj = {
        unix: unixStamp,
        natural: naturalStamp
    };

    return stampsObj;
};