import { Router } from "preact-router";
import Home from "../routes/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tours from "../components/Tours";
import Receptions from "../components/Receptions";
import Cottages from "../components/Cottages";
import Events from "../components/Events";
import Contacts from "../components/Contacts";
import Company from "../components/Company";
import Construction from "../components/Construction";
import History from "../components/History";
import Gallery from "../components/Gallery";
import Chauveau from "../components/Chauveau";

const App = () => (
    <div id="app">
        <Navbar />
        <Router>
            <Home exact path="/" />
            <Tours path="/visites_guidees" />
            <Receptions path="/receptions" />
            <Cottages path="/location_gites" />
            <Events path="/evenements" />
            <Contacts path="/contacts" />
            <Company path="/compagnie_indes" />
            <Construction path="/construction_malouinieres" />
            <History path="/histoire_ville_bague" />
            <Gallery path="/galerie" />
            <Chauveau path="/jacques_chauveau" />
        </Router>
        <Footer />
    </div>
);

export default App;
