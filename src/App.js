import React, { useState }from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import About from "./components/About";
import Nav from './components/Nav';
import Contact from './components/Contact';
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import './App.css';

function App() {

    const [categories] = useState([
        { name: 'Home'},
        { name: 'About' },
        { name: 'Portfolio' },
        { name: 'Contact' },
        { name: 'Resume' }
    ]);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <div id="app">
            <div id="header">
            <Header></Header>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            </div>
            <div id="main">
            {currentCategory === categories[0] && <Home></Home>}
            {currentCategory === categories[1] && <About></About>}
            {currentCategory === categories[2] && <Portfolio></Portfolio>}
            {currentCategory === categories[3] && <Contact></Contact>}
            {currentCategory === categories[4] && <Resume></Resume>}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;