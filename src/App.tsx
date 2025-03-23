import './App.css'
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import {Home, About, Projects, Contact} from "./pages/index";

const App = () => {

    return (
        <Router>
            <main className="bg-slate-300/20 h-full">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Navigate to="/" /> }/>
                </Routes>
            </main>
        </Router>

    )
}

export default App
