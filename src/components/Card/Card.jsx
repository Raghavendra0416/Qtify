import styles from "./Card.module.css"

function Card({ image, title, follows, likes, type }) {
    return (
        <div className={styles.card}>
            {/* Card Image and title*/}
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.cardImage} />
                <p className={styles.cardTitle}>{title}</p>
            </div>

            {/* Followers */}
            <div className={styles.cardFooter}>
                <span className={styles.followsBadge}>
                    {type === "songs" ? `${likes} Likes` : `${follows} Follows`}
                </span>
            </div>

            <p className={styles.cardLabel}>{title}</p>
        </div>
    );
}

export default Card;