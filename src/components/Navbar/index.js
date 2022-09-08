import { Link } from "preact-router/match";
import style from "./style.css";
import { useState } from "preact/hooks";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showLieuMobile, setShowLieuMobile] = useState(false);
    const [showLieu, setShowLieu] = useState(false);
    const [showPrestaMobile, setShowPrestaMobile] = useState(false);
    const [showPresta, setShowPresta] = useState(false);

    return (
        <>
            <div class={style.navbarMainContainer}>
                <nav class={style.navbarContainer} onMouseEnter={() => setShowLieu(false) + setShowPresta(false)}>
                    <div class={style.navbarLeft}></div>
                    <div
                        class={mobileOpen ? `${style.hamburgerMenu} ${style.open}` : style.hamburgerMenu}
                        onClick={() => {
                            setMobileOpen(!mobileOpen);
                        }}
                    >
                        <div class={style.hamburgerMenuBar}></div>
                    </div>
                    <div class={style.navbarRight}>
                        <div class={style.navbarLinks}>
                            <Link
                                class={style.navlinkHome}
                                activeClassName={style.active}
                                href="/"
                                onMouseEnter={() => setShowLieu(false) + setShowPresta(false)}
                            >
                                Accueil
                            </Link>
                            <div>
                                <div class={`${style.navlink} ${style.dropdownHeader}`} onMouseEnter={() => setShowLieu(true) + setShowPresta(false)}>
                                    Festivités ▾
                                </div>
                                <div
                                    class={showLieu ? `${style.dropdownContent} ${style.collapse}` : style.dropdownContent}
                                    onMouseLeave={() => {
                                        setShowLieu(false);
                                    }}
                                >
                                    <div class={style.dropdownElement}>
                                        <Link
                                            class={style.navlink}
                                            href="/cocktail"
                                            onClick={() => {
                                                setShowLieu(false);
                                            }}
                                        >
                                            Le cocktail
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link
                                            class={style.navlink}
                                            href="/soiree"
                                            onClick={() => {
                                                setShowLieu(false);
                                            }}
                                        >
                                            La soirée
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link
                                            class={style.navlink}
                                            href="/lendemain"
                                            onClick={() => {
                                                setShowLieu(false);
                                            }}
                                        >
                                            Le lendemain
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class={`${style.navlink} ${style.dropdownHeader}`} onMouseEnter={() => +setShowPresta(true) + setShowLieu(false)}>
                                    Infos ▾
                                </div>
                                <div
                                    class={showPresta ? `${style.dropdownContent} ${style.collapse}` : style.dropdownContent}
                                    onMouseLeave={() => {
                                        setShowPresta(false);
                                    }}
                                >
                                    {" "}
                                    <div class={style.dropdownElement}>
                                        <Link
                                            class={style.navlink}
                                            href="/hebergement"
                                            onClick={() => {
                                                setShowPresta(false);
                                            }}
                                        >
                                            Hébergement
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link
                                            class={style.navlink}
                                            href="/transports"
                                            onClick={() => {
                                                setShowPresta(false);
                                            }}
                                        >
                                            Transports
                                        </Link>
                                    </div>
                                    <div class={style.dropdownElement}>
                                        <Link
                                            class={style.navlink}
                                            href="/forum"
                                            onClick={() => {
                                                setShowPresta(false);
                                            }}
                                        >
                                            Contacts
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Link
                                class={style.navlink}
                                href="/galerie"
                                onMouseEnter={() => {
                                    setShowPresta(false);
                                }}
                            >
                                Galerie
                            </Link>
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
                            Festivités ▾
                        </div>
                        <div class={showLieuMobile ? `${style.dropdownContent} ${style.collapse}` : style.dropdownContent}>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/cocktail"
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                >
                                    Le cocktail
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/soiree"
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                >
                                    La soirée
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/lendemain"
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                >
                                    Le lendemain
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            class={`${style.navlink} ${style.dropdownHeader}`}
                            onClick={() => setShowPrestaMobile(!showPrestaMobile) + setShowLieuMobile(false)}
                        >
                            Infos ▾
                        </div>
                        <div class={showPrestaMobile ? `${style.dropdownContent} ${style.collapse}` : style.dropdownContent}>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/hebergement"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setShowLieuMobile(false);
                                    }}
                                >
                                    Hébergement
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/transports"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setShowLieuMobile(false);
                                    }}
                                >
                                    Transports
                                </Link>
                            </div>
                            <div class={style.dropdownElement}>
                                <Link
                                    class={style.navlink}
                                    activeClassName={style.active}
                                    href="/forum"
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setShowLieuMobile(false);
                                    }}
                                >
                                    Contacts
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
                </div>
            </div>
        </>
    );
};

export default Navbar;
