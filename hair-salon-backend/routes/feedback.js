const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();
const multer = require('multer');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// Get all feedback (or testimonials)
router.get('/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.aggregate([{ $sample: { size: 3 } }]);
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch feedback' });
    }
});

// Post new feedback (or testimonial)
router.post('/feedback', async (req, res) => {

    const { customerName, feedbackText } = req.body;
    const image = req.file ? req.file.buffer : null;

    try {
        const feedback = new Feedback({
            customerName,
            feedbackText,
            image
        });

        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Failed to submit feedback' });
    }
});


module.exports = router;

