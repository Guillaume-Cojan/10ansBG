import style from "./style.css";
// import "./countdown";

const Home = () => {
    return (
        <div class={style.mainContainer}>
            <div class={style.counterContainer}>
                <div class={style.counterCircles} id={"counter-circles"}>
                    <div class={style.counterCircle}>
                        <span class={style.counterFigure} id={"counterDaysLeft"}></span>
                        <span class={style.counterLabel}>Jours</span>
                    </div>
                    <div class={style.counterCircle}>
                        <span class={style.counterFigure} id={"counterHoursLeft"}></span>
                        <span class={style.counterLabel}>Heures</span>
                    </div>
                    <div class={style.counterCircle}>
                        <span class={style.counterFigure} id={"counterMinutesLeft"}></span>
                        <span class={style.counterLabel}>Minutes</span>
                    </div>
                    <div class={style.counterCircle}>
                        <span class={style.counterFigure} id={"counterSecondsLeft"}></span>
                        <span class={style.counterLabel}>Secondes</span>
                    </div>
                </div>
                <p id={"expired"}></p>
            </div>

            <div class={style.welcomeContainer}>
                <div class={style.welcomeIntro}>
                    <h1>10 ans déjà !</h1>
                </div>
                <div class={style.welcomeDetails}>
                    <p class={style.welcomeDetailsMain}>
                        Chers amis, <span style={"font-weight:900; color: #c99396"}>10 ans</span> déjà!<br></br>
                        Nous serions heureux de vous compter parmi nous pour plonger ensemble dans notre deuxième décennie en vous retrouvant sur la plage de
                        Saint-Malo le <span style={"font-weight:900; color: #c99396"}>1er octobre 2022</span>!
                    </p>
                    <p class={style.pLight}>
                        Dans l'euphorie qui suivra la lecture de cette invitation surprise, n'oubliez pas de répondre avant le{" "}
                        <span style={"font-weight:bold; color: #6caab3"}>8 septembre 2022</span>! <span style={"font-size:1.4em"}>👇 </span>
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
                    <p class={style.pLight}>Retrouvez ici toutes les informations pratiques des festivités très prochainement!</p>
                </div>
                <p class={style.signature}>🤍 B & G</p>
            </div>
        </div>
    );
};

export default Home;
