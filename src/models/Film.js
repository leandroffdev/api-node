const mongoose = require('mongoose');
const { Schema } = mongoose;

const filmSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    trailer_url: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Film = mongoose.model("Film", filmSchema);
module.exports = {
    Film,
    filmSchema
};