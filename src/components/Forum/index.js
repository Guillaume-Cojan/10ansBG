import { Link } from "preact-router/match";
import style from "./style.css";
import Bb from "../../assets/bb.jpg";
import Gc from "../../assets/gc.jpg";

const Forum = () => (
    <>
        <div class={style.componentIntro}>
            <h1>Contacts</h1>
        </div>
        <div class={style.componentContainer}>
            <h2>Vous avez une question ?</h2>
            <div class={style.contactsContainer}>
                <div class={style.contactContainer}>
                    <img src={Bb} />
                    <h3>Blandine</h3>
                    <a href="tel:+33695231338">06.95.23.13.38</a>
                    <a href="mailto:blandine.berkelmans@gmail.com">blandine.berkelmans@gmail.com</a>
                </div>
                <div class={style.contactContainer}>
                    <img src={Gc} />
                    <h3>Guillaume</h3>
                    <a href="tel:+33652974746">06.52.97.47.46</a>
                    <a href="mailto:guillaume.cojan@gmail.com">guillaume.cojan@gmail.com</a>
                </div>
            </div>
        </div>
    </>
);

export default Forum;
