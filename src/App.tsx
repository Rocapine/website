import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Terms from './Terms';
import Privacy from './Privacy';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </Router>
    );
};

export default App;