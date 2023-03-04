import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header";
import FeedbackList from "./components/feedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutLink from "./components/AboutLink";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<><FeedbackForm /><FeedbackStats /><FeedbackList /></>} />

                        <Route path="/about" element={<About />} />
                    </Routes>
                    <AboutLink />
                </div>
            </Router >
        </FeedbackProvider>
    )
}
// function App() {
//     const title = "Blog Post";
//     const body = "this is my blog post";
//     const comments = [
//         { id: 1, text: "comment one" },
//         { id: 2, text: "comment two" },
//         { id: 3, text: "comment three" },
//     ]
//     return (
//         <div className="container">
//             <h2>{title.toUpperCase()}</h2>
//             <p>{body}</p>
//             <div className="comments">
//                 <h3>Comments {comments.length}</h3>
//                 <ul>
//                     {
//                         comments.map((comment) => {
//                             return (
//                                 <li key={comment.id}>{comment.text}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }

export default App;