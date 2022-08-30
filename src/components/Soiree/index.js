import { Link } from "preact-router/match";
import style from "./style.css";
import Cunningham from "../../assets/cunnigham.jpeg";

const Soiree = () => (
    <>
        <div class={style.componentIntro}>
            <h1>La Soirée</h1>
        </div>
        <div class={style.componentContainer}>
            <h2>Le Cunningham's Bar</h2>
            <p>
                Pour poursuivre cette journée ensemble, nous vous convions au Cunningham's Bar à partir de 18h30, véritable institution du quartier de
                Saint-Servan, son atmosphère chaleureuse et feutrée offre une vue imprenable sur le port de Saint Malo et la vieille Ville.
            </p>
            <img src={Cunningham} class={style.imgPolaroid} />
        </div>
        <div class={style.componentContainer}>
            <h2>Au menu :</h2>
            <p>Apéro, dîner et soirée dansante 🥳 jusqu'à 3h00 du matin (si vous y tenez !)</p>
        </div>
        <div class={style.componentContainer}>
            <h2>Plan d'accès</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.6352080584406!2d-2.0240189846498686!3d48.63596232429667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e813bf3839565%3A0xa6354d973e5e94ba!2sCunningham&#39;s%20Bar!5e0!3m2!1sfr!2sfr!4v1661875614568!5m2!1sfr!2sfr"
                width="100%"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={style.imgPolaroid}
            ></iframe>
        </div>
    </>
);

export default Soiree;
