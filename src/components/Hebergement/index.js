import { Link } from "preact-router/match";
import style from "./style.css";
import Villebague from "../../assets/villebague.jpeg";

window.onload = function () {
    let myiFrame = document.getElementById("bnb1");
    let doc = myiFrame.contentDocument;
    doc.body.innerHTML = doc.body.innerHTML + "<style>color=green</style>";
};

const Hebergement = () => (
    <>
        <div class={style.componentIntro}>
            <h1>L'hébergement</h1>
        </div>
        <div class={style.componentContainer}>
            <h2>Les hôtels</h2>
            <p>
                Nous vous conseillons vivement de réserver une chambre d'hôtel proche du lieu de la soirée pour pouvoir rentrer à pieds. Voici une liste des
                hôtels accessible dans le quartier de Saint Servan.
            </p>
            <h3>Le Manoir du Cunningham</h3>
            <p>Situé juste en face du lieu de la soirée, cet hôtel de charme propose des chambres doubles à partir de 160€ la nuit.</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5273.2545512262905!2d-2.024518136514071!3d48.63611410282881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e813bf12bd193%3A0x517f1c40c30598b2!2sH%C3%B4tel%20Le%20Manoir%20du%20Cunningham!5e0!3m2!1sfr!2sfr!4v1661876839609!5m2!1sfr!2sfr"
                width="100%"
                height="100"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={style.imgPolaroid}
            ></iframe>
            <h3>Ibis Styles</h3>
            <p>A quelques minutes à pieds du port des Bas-Sablons, cet hôtel propose des chambres doubles à partir de 108€ la nuit.</p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5273.154022727522!2d-2.0254245400428634!3d48.637075845196954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e81404fcc0d77%3A0xaa8ae9286b1d171d!2sH%C3%B4tel%20ibis%20Styles%20Saint%20Malo%20Port!5e0!3m2!1sfr!2sfr!4v1661877283667!5m2!1sfr!2sfr"
                width="100%"
                height="100"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={style.imgPolaroid}
            ></iframe>
            <h3>Le Valmarin</h3>
            <p>
                En plein coeur de Saint-Servan, cette Malouinière de charme dispose de chambres à la nuité. Les chambres doubles sont aux alentours de 150€ la
                nuit à cette période de l'année.
            </p>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5273.154022727522!2d-2.0254245400428634!3d48.637075845196954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480e81391cadb017%3A0x8afc2f695ab13221!2sH%C3%B4tel%20Le%20Valmarin!5e0!3m2!1sfr!2sfr!4v1661877625786!5m2!1sfr!2sfr"
                width="100%"
                height="100"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={style.imgPolaroid}
            ></iframe>
            <h3>Autres...</h3>
            <p>Il y a de nombreux hôtels autour de la vieille ville. N'hésitez pas à explorer les lieux !</p>
        </div>
        <div class={style.componentContainer}>
            <h2>AirBnb</h2>
            <p>L'offre est assez nombreuse autour du port des Bas Sablons. Si vous préférez un appartement, ne tardez pas trop à réserver.</p>

            <div id="bnb1" class="airbnb-embed-frame" data-id="52591451" data-view="home" style="width:100%;height:300px;margin:auto">
                <a href="https://www.airbnb.fr/rooms/52591451?check_in=2022-10-01&amp;check_out=2022-10-02&amp;guests=1&amp;adults=2&amp;s=66&amp;source=embed_widget">
                    Voir sur Airbnb
                </a>
                <a
                    href="https://www.airbnb.fr/rooms/52591451?check_in=2022-10-01&amp;check_out=2022-10-02&amp;guests=1&amp;adults=2&amp;s=66&amp;source=embed_widget"
                    rel="nofollow"
                >
                    ⭐️Le bas-Sablons⭐️
                </a>
                <script async="" src="https://www.airbnb.fr/embeddable/airbnb_jssdk"></script>
            </div>
        </div>
    </>
);

export default Hebergement;
