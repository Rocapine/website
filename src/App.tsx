import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Terms from './Terms';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </Router>
    );
};

export default App;