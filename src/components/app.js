import { Router } from "preact-router";
import Home from "../routes/Home";
import Navbar from "../components/Navbar";
import Soiree from "../components/Soiree";
import Hebergement from "../components/Hebergement";
import Lendemain from "./Lendemain";
import Cocktail from "../components/Cocktail";
import Transports from "../components/Transports";
import Forum from "../components/Forum";
import Gallery from "../components/Gallery";

const App = () => (
    <div id="app">
        <Navbar />
        <Router>
            <Home exact path="/" />
            <Soiree path="/soiree" />
            <Hebergement path="/hebergement" />
            <Lendemain path="/lendemain" />
            <Cocktail path="/cocktail" />
            <Transports path="/transports" />
            <Forum path="/forum" />
            <Gallery path="/galerie" />
        </Router>
    </div>
);

export default App;
