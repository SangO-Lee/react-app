import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./assets/css/Common.scss";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    element={<Home />}
                ></Route>
                <Route
                    path={`${process.env.PUBLIC_URL}/movie/:id`}
                    element={<Detail />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
