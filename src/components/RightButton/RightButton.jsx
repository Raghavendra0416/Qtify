import styles from "./NavigationButton.module.css";
import RightNavButton from "../../assets/right_nav_button.svg";

function RightButton({ onClick }) {
    return (
        <button className={`${styles.navButton} ${styles.right}`} onClick={onClick}>
            <img src={RightNavButton} alt="right navigation button" />
        </button>
    );
}

export default RightButton;