import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthPage } from './pages/AuthPage';
import { ProductsPage } from './pages/ProductsPage';
import { Wrapper } from './components/Wrapper';
import { HomePage } from './pages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Wrapper />}>
                    <Route index element={<HomePage />} />
                    <Route path={'products'} element={<ProductsPage />} />
                </Route>
                <Route path={'auth'} element={<AuthPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
