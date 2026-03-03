import styles from "./NavigationButton.module.css";
import LeftNavButton from "../../assets/left_nav_button.svg";

function LeftButton({ onClick }) {
    return (
        <button className={`${styles.navButton} ${styles.left}`} onClick={onClick}>
            <img src={LeftNavButton} alt="left navigation button" />
        </button>
    );
}

export default LeftButton;