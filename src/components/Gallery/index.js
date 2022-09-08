import { Link } from "preact-router/match";
import style from "./style.css";
import Bff from ".././../assets/bff.png";
import Gphoto from ".././../assets/gphoto.png";
import Wall4 from ".././../assets/wall4.png";

const Gallery = () => (
    <>
        <div class={style.componentIntro}>
            <h1>Galerie</h1>
        </div>
        <div class={style.componentContainer}>
            <h2>Vous avez des photos à partager avec nous avant le jour J ?</h2>
            <p>
                Nous adorerions retrouver dans cet album partagé une rétrospective de ces 10 années passées à vos côtés. Contribuez, partagez, likez ! Cet
                espace est à vous (pas de trop gros dossiers quand même, hein?... 😅) !
            </p>
            <div class={style.albumContainer}>
                <a href="https://photos.app.goo.gl/hZjNkgXmh244m3gD6" target="_blank" rel="noopener noreferrer">
                    <img src={Bff} />
                </a>
                <hr></hr>
                <a href="https://photos.app.goo.gl/hZjNkgXmh244m3gD6" target="_blank" rel="noopener noreferrer">
                    <label>
                        <img src={Gphoto} />
                        <p>Participer à l'album partagé</p>
                    </label>
                </a>
            </div>
        </div>
        <div class={style.componentContainer}>
            <h2>Les photos de la journée</h2>
            <p>Retrouvez ici les photos de cet événement à partir du 3 octobre ! 😉</p>
            <div class={style.albumContainer}>
                <a href="https://photos.app.goo.gl/ui7GyotYau5A67BC7" target="_blank" rel="noopener noreferrer">
                    <img src={Wall4} />
                </a>
                <hr></hr>
                <a href="https://photos.app.goo.gl/ui7GyotYau5A67BC7" target="_blank" rel="noopener noreferrer">
                    <label>
                        <img src={Gphoto} />
                        <p>Voir les photos de la journée</p>
                    </label>
                </a>
            </div>
        </div>
    </>
);

export default Gallery;
