import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from '../pages/Form';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Form />} />
            </Routes>
        </Router>
    );
}
