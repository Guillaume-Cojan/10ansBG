import { Link } from "preact-router/match";
import style from "./style.css";
import Hamburger from "../../assets/hamburger.png";
import Eng from "../../assets/uk.png";
import { useState, useEffect } from "preact/hooks";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

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
                                <div class={`${style.navlink} ${style.dropdownHeader}`}>Le lieu</div>
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
                                <div class={`${style.navlink} ${style.dropdownHeader}`}>Prestations</div>
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
                    <Link class={style.navlinkHome} activeClassName={style.active} href="/">
                        Accueil
                    </Link>
                    <div>
                        <div class={`${style.navlink} ${style.dropdownHeader}`}>Le lieu</div>
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
                        <div class={`${style.navlink} ${style.dropdownHeader}`}>Prestations</div>
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
                <div class={mobileOpen ? "" : style.hidden}>
                    <img src={Eng} alt="eng-flag" class={style.engFlag} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
