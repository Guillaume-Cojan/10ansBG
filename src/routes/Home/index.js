import style from "./style.css";
import { useState, useEffect } from "preact/hooks";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Event from "../../components/Event";
import Receptions from "../../assets/receptions.jpg";
import Patrimoine from "../../assets/events/small/patrimoine-21.jpg";
import Automne from "../../assets/events/small/automne-21.jpg";
import carouselBassin from "../../assets/carousel-home/bassin.jpg";
import carouselSalon from "../../assets/carousel-home/grand_salon.jpg";
import carouselInstruments from "../../assets/carousel-home/instruments.jpg";
import carouselMalouiniere from "../../assets/carousel-home/malouiniere.jpg";
import carouselNenuphare from "../../assets/carousel-home/nenuphare.jpg";
import carouselChapelle from "../../assets/carousel-home/chapelle.jpg";
import carouselBibliotheque from "../../assets/carousel-home/bibliotheque.jpg";
import carouselNeige from "../../assets/carousel-home/neige.jpg";
import carouselChambre from "../../assets/carousel-home/chambre_rose.jpg";
import carouselFleurs from "../../assets/carousel-home/fleurs.jpg";
import carouselBassinMobile from "../../assets/carousel-home/bassin_mobile.jpg";
import carouselSalonMobile from "../../assets/carousel-home/grand_salon_mobile.jpg";
import carouselInstrumentsMobile from "../../assets/carousel-home/instruments_mobile.jpg";
import carouselMalouiniereMobile from "../../assets/carousel-home/malouiniere_mobile.jpg";
import carouselNenuphareMobile from "../../assets/carousel-home/nenuphare_mobile.jpg";
import carouselChapelleMobile from "../../assets/carousel-home/chapelle_mobile.jpg";
import carouselBibliothequeMobile from "../../assets/carousel-home/bibliotheque_mobile.jpg";
import carouselNeigeMobile from "../../assets/carousel-home/neige_mobile.jpg";
import carouselChambreMobile from "../../assets/carousel-home/chambre_rose_mobile.jpg";
import carouselFleursMobile from "../../assets/carousel-home/fleurs_mobile.jpg";

const Home = () => {
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(undefined);
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }
    const size = useWindowSize();
    return (
        <div class={style.homeMainContainer}>
            <div class={style.topImgContainer}>
                <div class={style.homeWelcomeTextContainer}>
                    <h1 id={style.welcomeMessage}>
                        Bienvenue à la Malouinière!
                    </h1>
                    <div id={style.welcomeSubtitle}>
                        Invitez-vous au cœur d'une demeure d'armateurs malouins.
                    </div>
                </div>
            </div>
            <div class={style.home}>
                <div class={style.homeIntro}>
                    <h1>La Ville Bague ouverte au public</h1>
                    <p>
                        Un cadre magnifique à quelques minutes de Saint-Malo,
                        une demeure du temps des riches armateurs malouins, un
                        parc de plusieurs hectares avec son bassin, son
                        colombier, sa chapelle et son jardin à la française...
                    </p>
                </div>
                <div class={style.homeVisit}>
                    <div class={style.homeVisitContent}>
                        <h2>
                            La Ville Bague vous accueille pour une visite
                            d'exception.
                        </h2>
                        <div class={style.carouselContainer}>
                            <CarouselProvider
                                naturalSlideWidth={100}
                                naturalSlideHeight={
                                    size > 700
                                        ? 60
                                        : size > 600
                                        ? 80
                                        : size > 480
                                        ? 100
                                        : 125
                                }
                                totalSlides={10}
                                visibleSlides={
                                    size < 900 ? 2 : size < 1300 ? 3 : 4
                                }
                                isPlaying={true}
                                infinite={true}
                                interval={3000}
                                step={size > 1300 ? 2 : 1}
                                isIntrinsicHeight={true}
                            >
                                <Slider>
                                    <Slide index={0}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselBassinMobile
                                                    : carouselBassin
                                            }
                                            alt="bassin"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={1}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselSalonMobile
                                                    : carouselSalon
                                            }
                                            alt="salon"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={2}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselInstrumentsMobile
                                                    : carouselInstruments
                                            }
                                            alt="instruments"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={3}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselMalouiniereMobile
                                                    : carouselMalouiniere
                                            }
                                            alt="malouiniere"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={4}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselNenuphareMobile
                                                    : carouselNenuphare
                                            }
                                            alt="nenuphare"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={5}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselChapelleMobile
                                                    : carouselChapelle
                                            }
                                            alt="chapelle"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={6}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselBibliothequeMobile
                                                    : carouselBibliotheque
                                            }
                                            alt="bibliotheque"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={7}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselNeigeMobile
                                                    : carouselNeige
                                            }
                                            alt="neige"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={8}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselChambreMobile
                                                    : carouselChambre
                                            }
                                            alt="chambre"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                    <Slide index={9}>
                                        <img
                                            src={
                                                size < 900
                                                    ? carouselFleursMobile
                                                    : carouselFleurs
                                            }
                                            alt="fleurs"
                                            class={style.imgPolaroidCarousel}
                                        />
                                    </Slide>
                                </Slider>
                            </CarouselProvider>
                        </div>
                        <p>
                            Faisant partie intégrante de l'histoire de
                            Saint-Malo, les malouinières sont uniques. En
                            visitant une authentique maison de corsaires et
                            d'armateurs malouins du XVIIIè siècle, vous
                            découvrirez un endroit paisible à quelques
                            kilomètres de Saint-Malo, édifié dans le but
                            d'échapper à la ville pour un moment de repos. Vous
                            aurez ainsi le loisir d'admirer le parc avec son
                            jardin à la française, de visiter la chapelle et le
                            pigeonnier de la demeure et également l'intérieur de
                            la malouinière avec son mobilier d'époque et ses
                            collections d'armes corsaires.
                        </p>
                    </div>
                </div>
                <div class={style.homeOther}>
                    <div class={style.homeOtherLeft}>
                        <h2>La Ville Bague vous propose également :</h2>
                        <h3>Réceptions, événements, location de gîtes...</h3>
                        <img
                            src={Receptions}
                            alt="receptions"
                            class={style.imgPolaroid}
                        />
                        <p>
                            Pour réussir vos dîners, cocktail, séminaires...
                            Laissez-vous charmer par l'authenticité du parc ou
                            des intérieurs de la malouinière spécialement
                            aménagés pour l'occasion. Avec une vue imprenable
                            sur le jardin, les salons représentent un lieu
                            d'exception pour toutes vos réceptions.
                        </p>
                        <p>
                            Vous restez libre du choix de vos prestataires. Pour
                            plus de confort, nous pouvons vous recommander nos
                            prestataires partenaires.
                        </p>
                        <p>
                            La Ville Bague met également à votre disposition
                            deux gîtes pour compléter vos réceptions ou
                            simplement pour vous offrir un moment de repos.
                            Situés à l'intérieur des murs de la propriété, ces
                            bâtiments de charme sont disponibles à la location à
                            la semaine ou au week-end.
                        </p>
                    </div>
                    <div class={style.homeOtherRight}>
                        <h2>A LA UNE</h2>
                        <Event
                            title="Journées du Patrimoine:"
                            img={Patrimoine}
                            description={
                                <>
                                    La Malouinière sera ouverte pour les
                                    Journées du Patrimoine les
                                    <strong> 18 et 19 septembre</strong>{" "}
                                    prochains. Visites guidées en continu sans
                                    réservation
                                    <strong> de 10h à 12h</strong> et
                                    <strong> de 14h30 à 17h30</strong>.
                                </>
                            }
                            link="/evenements"
                            linkText="En savoir plus"
                        />
                        <Event
                            title="Marché d'Automne:"
                            img={Automne}
                            description={
                                <>
                                    La Malouinière organise, les
                                    <strong>
                                        {" "}
                                        25 et 26 septembre 2021 de 10h à 18h
                                    </strong>{" "}
                                    un Marché d'Automne. Artisans d'Art et
                                    locaux, pépiniériste et métiers de bouche
                                    seront présents en nombre.
                                </>
                            }
                            link="/evenements"
                            linkText="En savoir plus"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
