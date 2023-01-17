import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutPage from '../Pages/AboutMePage';
export default function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<AboutPage />} path='sobre' />
            </Routes>

        </BrowserRouter>
    )
}