import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Page2 from './Page2';

function App() {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={[<Home />]} />
                    <Route path="/page2" element={[<Page2 />]} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App

