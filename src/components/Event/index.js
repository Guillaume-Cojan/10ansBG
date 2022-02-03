import { Link } from "preact-router/match";
import style from "./style.css";

const Event = ({ title, img, description, link, linkText }) => (
    <div class={style.componentContainer}>
        <div
            style={{
                borderTop: "1px solid rgb(226, 226, 226) ",
            }}
        ></div>
        <div class={style.eventCard}>
            <h3>{title}</h3>
            <Link class={style.eventLink} href={link}>
                <img class={style.imgPolaroid} src={img} alt="event" />
            </Link>
            <p>{description}</p>
            <div class={style.eventLinkContainer}>
                <Link class={style.eventLinkBtn} href={link}>
                    {linkText}
                </Link>
            </div>
        </div>
    </div>
);

export default Event;
