import { Link } from "preact-router/match";
import style from "./style.css";

const Transports = () => (
    <>
        <div class={style.componentIntro}>
            <h1>Transports</h1>
        </div>
        <div class={style.componentContainer}>
            <h2>En voiture</h2>
            <p>Si vous venez en voiture et n'avez pas de parking avec votre hébergement, nous vous recommandons le parking relais Paul Féval.</p>
            <p>
                <h3>Parking relais Paul Féval (P14)</h3>
                <hr />
                Le parking est ouvert toute l’année <br />
                Prix pour une voiture : 3,30€ la journée <br />
                Prix pour un camping car : 7,50€ la journée <br />
                Le ticket de stationnement permet à 5 personnes d’emprunter l’Express Féval avec navettes qui permettent de faire l’aller-retour jusqu’aux pieds
                des remparts.
                <br />
                <a class={style.map} href="https://goo.gl/maps/3ZvQUHq7shSQUu4RA" target="_blank" rel="noopener noreferrer">
                    <button class={style.map}>Voir sur le plan</button>
                </a>
            </p>
            <p>
                <h3>Le parking souterrain Saint-Vincent (P9)</h3>
                <hr />
                <p>Situé devant l&rsquo;entrée principale de la Cité corsaire, le parking souterrain Saint-Vincent est le plus proche du lieu du Cocktail.</p>
                <a class={style.map} href="https://goo.gl/maps/DFy3r5isokUJpGQs5" target="_blank" rel="noopener noreferrer">
                    <button class={style.map}>Voir sur le plan</button>
                </a>
                <p>
                    Le parking est ouvert 24h/24 et 7j/7 et dispose d&rsquo;un service de réservation. Vous pouvez d&rsquo;ores et déjà{" "}
                    <a
                        href="https://www.q-park.fr/fr-fr/villes/saint-malo/saint-vincent/?gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJupB3XegUuREHy_SFNw8hMQFVT5Ifw2MzakgqRmzmuI62mm7Xv5ZAakaApgCEALw_wcB"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        réserver une place
                    </a>
                    .
                </p>
                <p>
                    <span style="text-decoration: underline;">
                        <a
                            className={style.map}
                            href="https://www.q-park.fr/fr-fr/villes/saint-malo/saint-vincent/?gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJupB3XegUuREHy_SFNw8hMQFVT5Ifw2MzakgqRmzmuI62mm7Xv5ZAakaApgCEALw_wcB"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cliquez ici pour consulter les prix !
                        </a>
                    </span>
                </p>
            </p>
            <h2>En train</h2>
            <p>Gare la plus proche du lieu du Cocktail : Saint Malo</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.0648335983537!2d-2.0083665611770214!3d48.64687490399509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e8165fc29d76d%3A0x6f8f2079e6406f3f!2sGare%20de%20Saint%20Malo!5e0!3m2!1sfr!2sfr!4v1662025499389!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>Des TGV directs depuis Paris (temps de trajet 2h15). Sinon, prendre un TER pour Saint Malo à la gare de Rennes.</p>
            <h2>En taxi</h2>
            <p>Des taxis sont disponibles à la gare de Saint Malo</p>
            <a href="https://taxiscotedemeraude.com/" target="_blank" rel="noopener noreferrer">
                <h3>Taxis Côte d'Emeraude</h3>
            </a>
            <a href="tel:+33676547232">06.76.54.72.32</a>
            <a href="https://taxi-st-malo.com" target="_blank" rel="noopener noreferrer">
                <h3>Allô Taxis Saint-Malo</h3>
            </a>
            <a href="tel:+33223181181">02.23.18.11.81</a>
            <div>
                <h3>Allô les Taxis Bleus</h3>
            </div>
            <a href="tel:+33299198787">02.99.19.87.87</a>
        </div>
    </>
);

export default Transports;
