import { Link } from "preact-router/match";
import style from "./style.css";
import Evantail from "../../assets/eventail.jpeg";

const Cocktail = () => (
    <>
        <div class={style.componentIntro}>
            <h1>Cocktail</h1>
        </div>
        <div class={style.componentContainer}>
            <h2>Le lieu du cocktail étant maintenu secret... 😉</h2>
            <p>Nous vous donnons rendez-vous au pied des remparts de Saint Malo sur le parvis de l'Eventail à 15h00 précises !</p>
            <img src={Evantail} class={style.imgPolaroid} />
        </div>
        <div class={style.componentContainer}>
            <h2>Dress code</h2>
            <p>
                Nœuds papillon, robes longues, tout est permis ! <br />
                Venez comme vous êtes mais si possible en casual chic pour faire de l’œil à notre photographe lors du cocktail !
            </p>
        </div>
        <div class={style.componentContainer}>
            <h2>Plan d'accès</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.7539173359137!2d-2.0254234843427237!3d48.6528226792679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf96b6c63aff62977!2sParvis%20De%20L&#39;%C3%A9ventail!5e0!3m2!1sfr!2sfr!4v1661874224699!5m2!1sfr!2sfr"
                width="100%"
                max-width="500"
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

export default Cocktail;
