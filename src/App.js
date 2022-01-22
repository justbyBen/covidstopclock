import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CovidStopClock from './components/covidstopclock/CovidStopClock';
import CostumCountDown from './components/costumcountdown/CostumCountDown';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<CovidStopClock />} />
                    <Route path="/costum" element={<CostumCountDown />} />
                </Routes>
                </Suspense>
            </BrowserRouter>
        );
    }
}

export default App;