import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function About() {
    return (
        <Card>
            <div className="card">
                <h1>About the project</h1>
                <p>this is a react app to leave feedback for product or service</p>
                <p>Version : 1.0.0</p>
                <p>
                    <Link to="/">Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default About;