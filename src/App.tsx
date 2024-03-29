import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
