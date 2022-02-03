import { Link } from "preact-router/match";
import style from "./style.css";
import Indes from "../../assets/indes.jpg";
import Armoiries from "../../assets/indes-armoiries.jpg";

const Company = () => (
    <div class={style.componentContainer}>
        <div class={style.topLink}>
            <p>
                <Link href="/">Accueil</Link> / Le lieu / La Compagnie des Indes
            </p>
        </div>
        <div class={style.companyIntro}>
            <h1>La Compagnie des Indes</h1>
            <hr></hr>
            <img
                src={Indes}
                alt="compagnie_des_indes"
                class={style.imgPolaroid}
            />
        </div>
        <div class={style.companyMiddleParagraph}>
            <p>
                En 1661, Louis XIV confie à Colbert la charge de restaurer la
                puissance navale de la France, car les Portugais, Hollandais et
                Anglais contrôlent les commerce d'Asie (soieries, porcelaine,
                épices...) et en profitent seuls. Ces produits exotiques sont
                désormais indispensables aux européens. Colbert fonde en 1664 la
                Compagnie des Indes Orientales. Port Louis en est le port
                d'attache et l'Orient se construit peu à peu. Mais la guerre de
                Hollande, la ligue d'Augsbourg et certaines opérations
                commerciales désastreuses entrainent la ruine de la Compagnie
                qui doit louer ses privilèges à des négociants connus « comme
                étant les plus considérables du Royaume : les Messieurs de Saint
                Malo ». Le malouin Danycan reprend le commerce avec le Pérou
                pour sa « Compagnie des mers du sud ».
            </p>
        </div>
        <div class={style.quoteContainer}>
            <div class={style.quote}>
                <h3>
                    « La Compagnie des Indes Orientales jouira du privilège
                    exclusif du commerce dans toutes les mers des Indes et
                    au-delà de la ligne des Iles Bourbon et de la France. »
                </h3>
                <p>— Bernard Simiot, Ces messieurs de Saint-Malo</p>
            </div>
        </div>
        <div class={style.companyDetails}>
            <div class={style.companyDetailsImg}>
                <img
                    src={Armoiries}
                    alt="armoiries_compagnie_des_indes"
                    class={style.imgPolaroid}
                />
                <p>
                    Saint Malo est alors un des tout premiers ports de France
                    par le nombre de ses navires et la richesse de ses armateurs
                    qui fondent la « Compagnie Malouine des Indes ». Malgré le
                    succès indiscutable de ces Messieurs de Saint-Malo (Dupleix,
                    La Bourdonnais...), ils ne réussissent cependant pas à
                    redresser la Compagnie. De plus, le régent en 1715 leur
                    enlève le privilège du commerce de la Compagnie des Indes.
                    C'est Law qui la reprend en main en 1719. Il fonde alors la
                    Compagnie perpétuelle des Indes (1719-1769), compagnie
                    d'Occident, des Indes Orientales, du Sénégal, de Chine, de
                    Barbarie et de la Mer du Sud. Mais en 1721, c'est la
                    banqueroute. Le système de Law, bâti sur l'émission de
                    papier monnaie s'effondre.
                </p>
            </div>
            <p>
                Saint-Malo demeure une grande place commerciale et reste le
                siège d'une des nombreuses chambres régionales regroupant les
                actionnaires de la Compagnie (Paris, Lyon, Nantes, Bordeaux...)
                Entre 1725 et 1740, la Compagnie des Indes de l'Orient prospère.
                En ville, de riches négociants construisent des résidences et
                hôtels particuliers. Les navires rapportent dans leurs cales des
                cotonnades et soieries des Indes, du thé, de la porcelaine...)
                Mais les guerres de succession d'Autriche, la guerre de 7 ans
                privent la Compagnie de ses territoires d'exploitation et
                provoquent sa ruine financière. Louis XV décide de suspendre le
                monopole de la Compagnie en 1769. En 1793, la Révolution
                française stoppe une dernière tentative de créer une nouvelle
                Compagnie des Indes fondée en 1785, soupçonnée d'activités
                contre-révolutionnaires.
            </p>
        </div>
    </div>
);

export default Company;
