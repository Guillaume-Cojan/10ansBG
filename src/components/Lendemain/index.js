import { Link } from "preact-router/match";
import style from "./style.css";
import Villebague from "../../assets/villebague.jpeg";

const Lendemain = () => (
    <>
        <div class={style.componentIntro}>
            <h1>Le lendemain</h1>
        </div>
        <div class={style.componentContainer}>
            <h2>Malouinière de la Ville Bague</h2>
            <p>
                Difficile de ne pas revenir sur le lieu de notre mariage 10 ans après... Nous poursuivrons donc ce week-end festif en votre compagnie (si vous
                le voulez bien) pour un déjeuner champêtre dans le parc de la Malouinière.
            </p>
            <img src={Villebague} class={style.imgPolaroid} />
        </div>
        <div class={style.componentContainer}>
            <h2>Au menu :</h2>
            <p>Apéro, dîner et soirée dansante 🥳 jusqu'à 3h00 du matin (si vous y tenez !)</p>
        </div>
        <div class={style.componentContainer}>
            <h2>Plan d'accès</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.3769777835337!2d-1.9228619846483037!3d48.679156771264374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e82c6faa0726d%3A0x27d63f6241ba2b12!2sMalouini%C3%A8re%20de%20la%20Ville-Bague!5e0!3m2!1sfr!2sfr!4v1661875924181!5m2!1sfr!2sfr"
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

export default Lendemain;
