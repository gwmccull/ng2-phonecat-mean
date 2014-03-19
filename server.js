/*jshint node: true */
/*global static, __dirname, logger */
"use strict";

var mongoose = require("mongoose"),
	express = require("express"),
	app     = express(),
	Schema  = mongoose.Schema,
	phoneListSchema = new Schema({
		age:        Number,
		_id:        String,
		imageUrl:   String,
		name:       String,
		snippet:    String
	}),
	PhoneList = mongoose.model('PhoneList', phoneListSchema, 'phonelist'),
	phoneDetailSchema = new Schema({
		additionalFeatures: String,
		android: {
			os:     String,
			ui:     String
		},
		availability: Array,
		battery: {
			standbyTime: String,
			talkTime: String,
			type:   String
		},
		camera: {
			features: Array,
			primary: String
		},
		connectivity: {
			bluetooth: String,
			cell: String,
			gps: Boolean,
			infrared: Boolean,
			wifi: String
		},
		description: String,
		display: {
			screenResolution: String,
			screenSize: String,
			touchScreen: Boolean
		},
		hardware: {
			accelerometer: Boolean,
			audioJack: String,
			cpu: String,
			fmRadio: Array,
			physicalKeyboard: Boolean,
			usb: String
		},
		_id: String,
		images: Array,
		name: String,
		sizeAndWeight: {
			dimensions: Array,
			weight: String
		},
		storage: {
			flash: String,
			ram: String
		}
	}),
	PhoneDetail = mongoose.model('PhoneDetail', phoneDetailSchema, 'phones');

mongoose.connect('mongodb://localhost:27017/phonecat');

app.configure(function() {
	app.use(express.static(__dirname + '/app'));            // set the static files location /app/img will be /img for users
	app.use(express.logger('dev'));                         // log every request to the console
	app.use(express.bodyParser());							// pull information from html in POST
	app.use(express.methodOverride());                      // simulate DELETE and PUT
});

//routes
app.get('/api/phonelist', function (req, res) {
	PhoneList.find(function (err, phones) {
		if (err) {
			res.send(err);
		}

		res.json(phones);
	});
});
app.get('/api/phonelist/:phoneId', function (req, res) {
	PhoneDetail.where({'_id': req.params.phoneId}).findOne(function (err, phone) {
		if (err) {
			res.send(err);
		}

		res.json(phone);
	});
});
app.put('/api/phonelist/:phoneId', function (req, res) {
	var phoneDetail = new PhoneDetail(req.body),
		updateData = phoneDetail.toObject();
	delete updateData._id;

	PhoneDetail.update({'_id': phoneDetail._id}, updateData, {multi: false}, function (err, numberAffected) {
		if (err) {
			res.send(err);
		}

		res.json(numberAffected);
	});

});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");

