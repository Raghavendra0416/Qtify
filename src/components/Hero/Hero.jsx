import styles from "./Hero.module.css";
import hero_headphones from "../../assets/hero_headphones.svg";

function Hero() {
    return (
        <div className={styles.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img
                    // src={require("../../assets/hero_headphones.svg")}
                    src={hero_headphones}
                    width={212}
                    alt="headphones"
                />
            </div>
        </div>
    );  
}

export default Hero;
