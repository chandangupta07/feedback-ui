import { AnimatePresence, motion } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
import FeedbackItem from "./feedbackItem";
function FeedbackList() {
    const { feedback } = useContext(FeedbackContext);
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    return (


        <div className="feedback-list">
            <AnimatePresence>
                {
                    feedback.map((item) => {
                        return <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            < FeedbackItem key={item.id} item={item} />

                        </motion.div>
                    })
                }
            </AnimatePresence>
        </div>
    )
    // return (
    //     <div className="feedback-list">
    //         {
    //             feedback.map((item) => {
    //                 return < FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //             })
    //         }
    //     </div>
    // )
}


export default FeedbackList;