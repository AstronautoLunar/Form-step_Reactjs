import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import Form from '../pages/Form';

export default function AppRoutes() {
    const { stateForm } = useForm();

    return (
        <Router>
            <header>
                <nav>
                    <ul>
                        {stateForm.map(({ textLink, idScreen }) => (
                            <li key={idScreen}>
                                <Link to={`/:${idScreen}`}>{textLink} </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/:id" element={<Form />} />
            </Routes>
        </Router>
    );
}
