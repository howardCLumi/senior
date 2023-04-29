import "./App.css";
import React from "react";
import {Route, Routes} from "react-router-dom";

import StudentView from "./pages/StudentView";
import PageLayout from "./components/PageLayout";

function App() {
    return (
        <div className="app">
            <PageLayout/>
            <Routes>
                <Route exact path="/" elements={<StudentView/>}/>
            </Routes>
        </div>
    );
}

export default App;
