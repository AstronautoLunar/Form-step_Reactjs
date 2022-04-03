import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from '../pages/Form';
import Header from '../components/Header';

export default function AppRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/:id" element={<Form />} />
                <Route path="/" element={<h1>Clique na rota acima</h1>} />
            </Routes>
        </Router>
    );
}
