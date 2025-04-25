// import { useState } from 'react'
import { Home } from "../components/Home.tsx";
import { Contacts } from "../components/Contacts.tsx";
import { About } from "../components/About.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router";
import './App.css'
import Header from "../components/Header.tsx";

function App() {


    return (
        <>
            <Header />

            <Router>
                <Routes>
                    
                  <Route path="/" element={<Home/>} />
                    <Route path="/contacts" element={<Contacts/>} />
                    <Route path="/about" element={<About/>} />

                </Routes>

            </Router>



        </>
    )
}
export default App
