import { Link } from "preact-router/match";
import style from "./style.css";

const Footer = () => (
    <div class={style.footerContainer}>
        <div class={style.footerSections}>
            <div class={style.footerSection}>
                <h3>A propos</h3>
                <div class={style.footerInnerSection}>
                    <p>
                        La Ville Bague est une propriété privée inscrite au
                        titre des monuments historiques.
                    </p>
                    <Link class={style.footerLink} href="/">
                        Page d'accueil
                    </Link>
                    <Link class={style.footerLink} href="/">
                        Informations légales
                    </Link>
                </div>
            </div>
            <div class={style.footerSection}>
                <h3>Bonnes adresses</h3>
                <div class={style.footerInnerSection}>
                    <a
                        href="https://www.chipaudiere.com/"
                        target="_blank"
                        rel="noreferrer"
                        class={style.footerLink}
                    >
                        Malouinière de la Chipaudière
                    </a>
                    <a
                        href="https://www.la-bardoulais.com/"
                        target="_blank"
                        rel="noreferrer"
                        class={style.footerLink}
                    >
                        Malouinière de la Bardoulais
                    </a>
                    <a
                        href="http://www.musee-jacques-cartier.fr/"
                        target="_blank"
                        rel="noreferrer"
                        class={style.footerLink}
                    >
                        Musée Jacques Cartier
                    </a>
                    <a
                        href="http://www.petit-be.com/"
                        target="_blank"
                        rel="noreferrer"
                        class={style.footerLink}
                    >
                        Le fort du Petit Bé
                    </a>
                </div>
            </div>
            <div class={style.footerSection}>
                <h3>Suivez-nous</h3>
                <div class={style.footerInnerSection}>
                    <a
                        href="https://www.facebook.com/LaVilleBague/"
                        target="_blank"
                        rel="noreferrer"
                        class={style.footerLink}
                    >
                        suivez-nous sur facebook
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC_VtQ2P70o-oxbZAqq_m5Mw"
                        target="_blank"
                        rel="noreferrer"
                        class={style.footerLink}
                    >
                        abonnez-vous à notre chaîne
                    </a>
                    <a
                        href="https://www.tripadvisor.fr/Attraction_Review-g1898962-d4548204-Reviews-Malouiniere_de_la_Ville_Bague-Saint_Coulomb_Ille_et_Vilaine_Brittany.html"
                        target="_blank"
                        rel="noreferrer"
                        class={style.footerLink}
                    >
                        votre avis est précieux!
                    </a>
                </div>
            </div>
            <div class={style.footerSection}>
                <h3>Contacts</h3>
                <div class={style.footerInnerSection}>
                    <div>
                        <h4>Téléphone :</h4>
                        <a href="tel:+33699401879" title="Téléphone">
                            06.99.40.18.79
                        </a>
                    </div>
                    <div>
                        <h4>Email :</h4>
                        <a
                            href="mailto:la-ville-bague@netcourrier.com"
                            title="Email"
                        >
                            la-ville-bague@netcourrier.com
                        </a>
                    </div>
                    <div>
                        <h4>Adresse :</h4>
                        <p>Malouinière de la Ville Bague 35350 Saint Coulomb</p>
                    </div>
                </div>
            </div>
        </div>
        <div class={style.copyright}>
            ©{new Date().getFullYear()} La Ville-Bague, Tous droits réservés
        </div>
    </div>
);

export default Footer;
