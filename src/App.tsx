import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import CGU from './CGU';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/cgu" element={<CGU />} /> */}
            </Routes>
        </Router>
    );
};

export default App;