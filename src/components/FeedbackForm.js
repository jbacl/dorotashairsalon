import React, { useState } from 'react';

function FeedbackForm() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [feedbackText, setFeedbackText] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new URLSearchParams();
        formData.append('customerName', customerName);
        formData.append('feedbackText', feedbackText);
        if (image) {
            formData.append('image', image);
        }
    
        try {
            const response = await fetch('http://localhost:5001/api/feedback', {
                method: 'POST',
                body: formData,
            });
    
            if (response.ok) {
                setMessage('Feedback submitted successfully!');
                setCustomerName('');
                setFeedbackText('');
                setImage(null);
            } else {
                setMessage('Failed to submit feedback. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setMessage('An error occurred. Please try again.');
        }
    };
    

    return (
        <div className="feedbackForm">
            {!isExpanded && (
                <button onClick={() => setIsExpanded(true)} className="expandButton">
                    Submit A Review
                </button>
            )}
            {isExpanded && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Feedback:</label>
                        <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    {/* <div>
                        <label>Image (optional):</label>
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            accept="image/*"
                        />
                    </div> */}
                    <button type="submit">Submit Feedback</button>
                    <button type="button" onClick={() => setIsExpanded(false)} className="cancelButton">
                        Cancel
                    </button>
                </form>
            )}
            {message && <p>{message}</p>}
        </div>
    );
}

export default FeedbackForm;

