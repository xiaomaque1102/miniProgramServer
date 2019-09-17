var express = require('express');
var router = express.Router();
var request = require('request');

// nodeJs接口

router.get('/', function (req, res, next) {
    var e = request({
        url: 'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_MKT_TARGET_GROUP_SRV/TargetGroups?$top=' + req.query.top + '&$skip=' + req.query.skip,
        method: 'GET',

        headers: {
            // 'Accept-Encoding': 'gzip,deflate',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'APIKey': '8JGEaSs9KNVw5ouREIqBuXmUZBEIIlZ1'
        }
    }, function (error, response, body) {
        console.log(body)
        // console.log(response)
        if (error) {
            console.log(error)
        } else {
            // res.send({body})
            // 以json形式返回
            res.send({
                data: JSON.parse(body)
            })
        }

    });
})

module.exports = router;