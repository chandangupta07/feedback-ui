import Card from "./shared/Card";
import Button from "./shared/Button"
import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSekect";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);
    const handleTextChange = (e) => {
        if (text.trim() === '' || text.trim().length === 0) {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length < 10) {
            setBtnDisabled(true);
            setMessage("review atleast contain 10 character");
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value)
    }

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }

    }, [feedbackEdit])

    const handleSubmit = function (e) {
        e.preventDefault();
        const feedbackData = {
            text,
            rating
        }
        if (feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, feedbackData)
        } else {
            addFeedback(feedbackData);
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text} />
                    <Button type="submit" isDisabled={btnDisabled} className="submit">Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;