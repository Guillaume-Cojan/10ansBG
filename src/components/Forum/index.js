import { Link } from "preact-router/match";
import style from "./style.css";

const Forum = () => (
    <>
        <div class={style.componentIntro}>
            <h1>Le Forum</h1>
        </div>
        <div class={style.componentContainer}>
            <h2>Vous souhaitez échanger entre vous ?</h2>
            <p>Des questions sur l'organisation de la journée, envie de partager un trajet, faire du covoiturage... ? C'est LE bon endroit pour ça !</p>
            <iframe src="https://10ans-bg.forumactif.com/" height="800" width="1000" frameborder="0" scrolling="no"></iframe>
        </div>
    </>
);

export default Forum;
