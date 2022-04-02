import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>HELLOW WORLD</h1>} />
            </Routes>
        </Router>
    );
}
