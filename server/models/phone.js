let mongoose = require('mongoose');
let Schema  = mongoose.Schema;
let phoneDetailSchema = new Schema({
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
});
let PhoneDetail = mongoose.model('Phone', phoneDetailSchema, 'Phone');

export default PhoneDetail;