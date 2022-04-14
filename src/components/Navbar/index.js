import { Link } from "preact-router/match";
import style from "./style.css";
import Hamburger from "../../assets/hamburger.png";
import Eng from "../../assets/uk.png";
import { useState, useEffect } from "preact/hooks";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showLieuMobile, setShowLieuMobile] = useState(false);
    const [showPrestaMobile, setShowPrestaMobile] = useState(false);

    return (
        <>
            <div class={style.navbarMainContainer}>
                <nav class={style.navbarContainer}>
                    <div class={style.navbarLeft}>
                        <Link id={style.navbarMainTitle} href="/">
                            LA VILLE BAGUE
                        </Link>
                        <a href="http://www.saintcoulomb.com/" id={style.navbarSubtitle} target="_blank" rel="noopener noreferrer">
                            SAINT-COULOMB
                        </a>
                    </div>
                    <div
                        class={mobileOpen ? `${style.hamburgerMenu} ${style.open}` : style.hamburgerMenu}
                        onClick={() => {
                            setMobileOpen(!mobileOpen);
                        }}
                    >
                        {/* <img src={Hamburger} alt="menu" /> */}
                        <div class={style.hamburgerMenuBar}></div>
                    </div>
                    <div class={style.navbarRight}>
                        <div class={style.navbarLinks}>
                            <Link class={style.navlinkHome} activeClassName={style.active} href="/">
                                Accueil
                            </Link>
                            <div>
                                <div class={`${style.navlink} ${style.dropdownHeader}`}>Le lieu ▾</div>
                                <div class={style.dropdownContent}>
                                    <div class={style.dropdownElement}>
                                        <Link class={style.navlink} href="/compagnie_indes">
                                            La Compagnie des Indes
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link class={style.navlink} href="/construction_malouinieres">
                                            La construction des malouinières
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link class={style.navlink} href="/histoire_ville_bague">
                                            L'Histoire de la Ville Bague
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link class={style.navlink} href="/jacques_chauveau">
                                            Jacques Chauveau
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class={`${style.navlink} ${style.dropdownHeader}`}>Prestations ▾</div>
                                <div class={style.dropdownContent}>
                                    <div class={style.dropdownElement}>
                                        <Link class={style.navlink} href="/visites_guidees">
                                            Visites guidées
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link class={style.navlink} href="/receptions">
                                            Réceptions
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link class={style.navlink} href="/location_gites">
                                            Locations de gîtes
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link class={style.navlink} href="/evenements">
                                            Evénements
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link class={style.navlink} href="/galerie">
                                Galerie
                            </Link>
                            <Link class={style.navlink} href="/contacts">
                                Contacts
                            </Link>
                        </div>
                        <div>
                            <img src={Eng} alt="eng-flag" class={style.engFlag} />
                        </div>
                    </div>
                </nav>
            </div>
            <div class={mobileOpen ? style.navbarMobile : `${style.navbarMobile} ${style.navbarMobileHidden}`}>
                <div class={mobileOpen ? style.navbarLinks : style.hidden}>
                    <Link
                        class={style.navlinkHome}
                        activeClassName={style.active}
                        href="/"
                        onClick={() => {
                            setMobileOpen(false);
                            setShowLieuMobile(false);
                        }}
                    >
                        Accueil
                    </Link>
                    <div>
                        <div
                            class={`${style.navlink} ${style.dropdownHeader}`}
                            onClick={() => setShowLieuMobile(!showLieuMobile) + +setShowPrestaMobile(false)}
                        >
                            Le lieu ▾
                        </div>
                        <div class={showLieuMobile ? `${style.dropdownContent} ${style.collapse}` : style.dropdownContent}>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/compagnie_indes"
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                >
                                    La Compagnie des Indes
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/construction_malouinieres"
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                >
                                    La construction des malouinières
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/histoire_ville_bague"
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                >
                                    L'Histoire de la Ville Bague
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/jacques_chauveau"
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                >
                                    Jacques Chauveau
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            class={`${style.navlink} ${style.dropdownHeader}`}
                            onClick={() => setShowPrestaMobile(!showPrestaMobile) + setShowLieuMobile(false)}
                        >
                            Prestations ▾
                        </div>
                        <div class={showPrestaMobile ? `${style.dropdownContent} ${style.collapse}` : style.dropdownContent}>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/visites_guidees"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setShowLieuMobile(false);
                                    }}
                                >
                                    Visites guidées
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/receptions"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setShowLieuMobile(false);
                                    }}
                                >
                                    Réceptions
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/location_gites"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setShowLieuMobile(false);
                                    }}
                                >
                                    Locations de gîtes
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/evenements"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setShowLieuMobile(false);
                                    }}
                                >
                                    Evénements
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link
                        class={style.navlink}
                        activeClassName={style.active}
                        href="/galerie"
                        onClick={() => {
                            setMobileOpen(false);
                            setShowLieuMobile(false);
                        }}
                    >
                        Galerie
                    </Link>
                    <Link
                        class={style.navlink}
                        activeClassName={style.active}
                        href="/contacts"
                        onClick={() => {
                            setMobileOpen(false);
                            setShowLieuMobile(false);
                        }}
                    >
                        Contacts
                    </Link>
                </div>
                <div
                    class={mobileOpen ? "" : style.hidden}
                    onClick={() => {
                        setMobileOpen(false);
                        setShowLieuMobile(false);
                    }}
                >
                    <img src={Eng} alt="eng-flag" class={style.engFlag} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
