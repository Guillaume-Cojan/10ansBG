import style from "./style.css";
import { useState, useEffect } from "preact/hooks";

const Home = () => {
    var count = new Date("01 october 2022 15:00:00").getTime();
    var now = new Date().getTime();
    var distance = count - now;
    var [days, setDays] = useState(Math.floor(distance / (1000 * 60 * 60 * 24)));
    var [hours, setHours] = useState(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var [minutes, setMinutes] = useState(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var [seconds, setSeconds] = useState(Math.floor((distance % (1000 * 60)) / 1000));

    useEffect(() => {
        const timer = setInterval(() => {
            var count = new Date("01 october 2022 15:00:00").getTime();
            var now = new Date().getTime();
            var distance = count - now;
            setDays(Math.round(Math.floor(distance / (1000 * 60 * 60 * 24))));
            setHours(Math.round(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
            setMinutes(Math.round(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))));
            setSeconds(Math.round(Math.floor(distance % (1000 * 60)) / 1000));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div class={style.mainContainer}>
            <div class={style.counterContainer}>
                <div class={new Date("01 october 2022 15:00:00").getTime() > new Date().getTime() ? style.counterCircles : style.hidden} id={"counter-circles"}>
                    <div class={style.counterCircle}>
                        <span class={style.counterFigure} id={"counterDaysLeft"}>
                            {days}
                        </span>
                        <span class={style.counterLabel}>Jours</span>
                    </div>
                    <div class={style.counterCircle}>
                        <span class={style.counterFigure} id={"counterHoursLeft"}>
                            {hours}
                        </span>
                        <span class={style.counterLabel}>Heures</span>
                    </div>
                    <div class={style.counterCircle}>
                        <span class={style.counterFigure} id={"counterMinutesLeft"}>
                            {minutes}
                        </span>
                        <span class={style.counterLabel}>Minutes</span>
                    </div>
                    <div class={style.counterCircle}>
                        <span class={style.counterFigure} id={"counterSecondsLeft"}>
                            {seconds}
                        </span>
                        <span class={style.counterLabel}>Secondes</span>
                    </div>
                </div>
                <div class={new Date("01 october 2022 15:00:00").getTime() > new Date().getTime() ? style.hidden : style.letsGo} id={"counter-circles"}>
                    <h1>Let's go Party !</h1>
                    <h1>🥳</h1>
                </div>
            </div>

            <div class={style.welcomeContainer}>
                <div class={style.welcomeIntro}>
                    <h1>10 ans déjà !</h1>
                </div>
                <div class={style.welcomeDetails}>
                    <p class={style.welcomeDetailsMain}>
                        Bienvenu sur cette page dédiée à nos <span style={"font-weight:900; color: #c99396"}>10 ans de mariage</span>. Vous y trouverez des
                        informations pratiques (lieux, hôtels, transports...). <br />
                        <br />
                        Un onglet Galerie vous permet d'<span style={"font-weight:900; color: #c99396"}>ajouter des photos</span> de vous, de nous, de nos
                        moments partagés depuis ces 10 dernières années <span style={"font-weight:900; color: #c99396"}>avant le 20 septembre</span> afin que
                        nous puissions les utiliser pour la soirée. 😊
                        <br />
                        <br />
                        Nous sommes impatients de vous revoir pour plonger ensemble dans notre deuxième décennie. Rendez-vous sur la plage de Saint Malo le{" "}
                        <span style={"font-weight:900; color: #c99396"}>1er octobre 2022</span>
                    </p>
                    <p class={style.pLight}>
                        PS : Pour ceux qui n'auraient pas encore répondu, cela se passe ici ! <span style={"font-size:1.4em"}>👇 </span>
                    </p>
                    <div class={style.rsvpContainer}>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSer2E_r2v35Fnz11Eeg8Z27lck48vWTpKBcxbSU5pUxV_LxYA/viewform?usp=sf_link"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <button>RSVP</button>
                        </a>
                    </div>
                    {/* <p class={style.pLight}>Retrouvez ici toutes les informations pratiques des festivités très prochainement!</p> */}
                </div>
                <p class={style.signature}>🤍 B & G</p>
            </div>
        </div>
    );
};

export default Home;
