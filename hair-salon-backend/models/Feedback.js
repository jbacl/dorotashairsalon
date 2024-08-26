const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    feedbackText: { type: String, required: true },
    image: { type: Buffer, required: false }
}, { versionKey: false });

const Feedback = mongoose.model('Feedback', feedbackSchema, 'customer_feedback');

module.exports = Feedback;
