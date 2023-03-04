import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "this a context provider comment 1",
            rating: 10
        },
        {
            id: 2,
            text: "this a context provider comment 2",
            rating: 8
        },
        {
            id: 3,
            text: "this a context provider comment 3",
            rating: 9
        },
        {
            id: 4,
            text: "this a context provider comment 4",
            rating: 7
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    // deleting feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure want to delete this?"));
        setFeedback(feedback.filter((item) => item.id !== id));
    }

    // adding feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    // set feedback to edit 
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // update feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        )
    }

    return (
        <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;