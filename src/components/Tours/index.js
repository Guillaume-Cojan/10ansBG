import { Link } from "preact-router/match";
import style from "./style.css";
import Visites from "../../assets/visites.jpg";

const Tours = () => (
    <div class={style.componentContainer}>
        <div class={style.topLink}>
            <p>
                <Link href="/">Accueil</Link> / Prestations / Visites guidées
            </p>
        </div>
        <div class={style.toursIntro}>
            <h1>Visites guidées</h1>
            <hr></hr>
            <h4>
                Les visites sont <strong>uniquement guidées</strong> et ont lieu{" "}
                <strong>sans réservation préalable</strong>, pendant la saison :{" "}
                <br />
                de <span style="color:rgb(0, 153, 204)">début avril</span>{" "}
                (vacances de Pâques) jusqu'à la{" "}
                <span style="color:rgb(0, 153, 204)">
                    fin des vacances de la Toussaint
                </span>{" "}
                (voir horaires ci-dessous).
                <br />
                <br />
                Fermeture hebdomadaire le mercredi.
                <br />
                <br />
                La visite libre du parc ou des intérieurs n'est pas autorisée.
            </h4>{" "}
            <img
                src={Visites}
                alt="visites"
                class={style.imgPolaroid}
                id={style.imgPolaroidMobile}
            />
        </div>
        <div class={style.toursDetails}>
            <div class={style.toursDetailsLeft}>
                <h2 style="text-align:center">Particuliers</h2>
                <h4>Horaires des visites:</h4>
                <p>
                    <u>De début avril au 30 septembre</u> :<br></br>2 visites
                    guidées par jour, tous les jours sauf le mercredi :
                    <span style="color:rgb(0, 153, 204)">
                        <strong> 14h30</strong>
                    </span>{" "}
                    et
                    <span style="color:rgb(0, 153, 204)">
                        <strong> 16h00 </strong>
                    </span>
                    (durée: 1h30)
                </p>
                <p>
                    <u>Du 1er octobre à la fin des vacances de la Toussaint</u>:
                    <br></br> 1 visite guidée par jour :
                    <span style="color:rgb(0, 153, 204)">
                        <strong> 15h00 </strong>
                    </span>
                    (durée: 1h30)
                </p>
                <h4>Tarifs:</h4>
                <p>
                    - Adulte : <strong>9,00€</strong> par personne<br></br>-
                    Enfant/Etudiant : <strong>4,50€</strong>
                </p>
                <h2 style="text-align:center">Groupes</h2>
                <p>
                    Visites possibles <u>toute l'année</u> sur rendez-vous.
                    <br></br>
                    Tarif goupes (15 personnes) : <strong>8,00€</strong>
                </p>
                <h2 style="text-align:center">Fermetures spécifiques</h2>
                <p>
                    En raison de l'organisation des Journées des Plantes, les
                    visites guidées ne seront pas assurées le jeudi 26 et le
                    vendredi 27 mai 2022.
                </p>
            </div>
            <div class={style.toursDetailsRight}>
                <img
                    src={Visites}
                    alt="visites"
                    class={style.imgPolaroid}
                    id={style.imgPolaroidDesktop}
                />
                <p>
                    Après un long travail de restauration qui continue encore
                    aujourd'hui, la Malouinière de la Ville Bague a retrouvé son
                    lustre d'antan. Aujourd'hui, elle s'ouvre à vous pour un
                    moment de détente tout en vous plongeant dans l'univers des
                    armateurs malouins de l'époque du Roi Soleil.
                </p>
                <p>
                    Le parc à la française ombragé, son colombier carré et sa
                    chapelle seront l'occasion d'un instant de flânerie et
                    s'ouvriront sur le corps de logis principal. Vous pourrez
                    notamment y découvrir l'histoire insolite du papier peint
                    panoramique de la Manufacture Dufour et Leroy, exemplaire
                    exceptionnel dans sa version intégrale, classé monument
                    historique.
                </p>
                <p>
                    Le mobilier d'époque et les nombreux objets de marine chinés
                    aux quatre coins du monde vous transporteront trois siècles
                    en arrière.
                </p>
                <p>
                    Vous pourrez également admirer une collection d'armes
                    corsaires ainsi qu'une exposition sur les arts de la table.
                </p>
            </div>
        </div>
    </div>
);

export default Tours;
