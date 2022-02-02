import { Link } from "preact-router/match";
import style from "./style.css";
import Hamburger from "../../assets/hamburger.png";
import Eng from "../../assets/uk.png";

const Navbar = () => (
    <nav class={style.navbarContainer}>
        <div class={style.navbarLeft}>
            <Link id={style.navbarMainTitle} href="/">
                LA VILLE BAGUE
            </Link>
            <Link
                href="http://www.saintcoulomb.com/"
                id={style.navbarSubtitle}
                target="_blank"
                rel="noreferrer"
            >
                SAINT-COULOMB
            </Link>
        </div>
        <div class={style.hamburgerMenu}>
            <img src={Hamburger} alt="menu" />
        </div>
        <div class={style.navbarRight}>
            <div class={style.navbarLinks}>
                <Link
                    class={style.navlinkHome}
                    activeClassName={style.active}
                    href="/"
                >
                    Accueil
                </Link>
                <div>
                    <div id={style.dropdownBasic} className={style.navlink}>
                        Le lieu
                    </div>
                    <div>
                        <div>
                            <Link class={style.navlink} href="/compagnie_indes">
                                La Compagnie des Indes
                            </Link>
                        </div>
                        <div>
                            <Link
                                class={style.navlink}
                                href="/construction_malouinieres"
                            >
                                La construction des malouinières
                            </Link>
                        </div>
                        <div>
                            <Link
                                class={style.navlink}
                                href="/histoire_ville_bague"
                            >
                                L'Histoire de la Ville Bague
                            </Link>
                        </div>
                        <div>
                            <Link
                                class={style.navlink}
                                href="/jacques_chauveau"
                            >
                                Jacques Chauveau
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div class={style.navlink}>Prestations</div>
                    <div>
                        <div>
                            <Link class={style.navlink} href="/visites_guidees">
                                Visites guidées
                            </Link>
                        </div>
                        <div>
                            <Link class={style.navlink} href="/receptions">
                                Réceptions
                            </Link>
                        </div>
                        <div>
                            <Link class={style.navlink} href="/location_gites">
                                Locations de gîtes
                            </Link>
                        </div>
                        <div>
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
);

export default Navbar;
