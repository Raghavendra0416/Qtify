import { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, data, type, children }) {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleView = () => {
        setIsExpanded(!isExpanded);
    };

    const renderCard = (album) => (
        <Card
            image={album.image}
            title={album.title}
            follows={album.follows}
            likes={album.likes}
            type={type}
        />
    );

    return (
        <div className={styles.section}>

            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{title}</h2>

                {type !== "songs" && (
                    <span className={styles.toggleText} onClick={toggleView}>
                        {type === "top"
                            ? (isExpanded ? "Collapse" : "Show All")
                            : "Show All"}
                    </span>
                )}
            </div>

            {/* Divider line below header */}
            <hr className={styles.divider} />

            {children}

            {type === "top" && isExpanded ? (
                <div className={styles.cardsContainer}>
                    {data && data.map((album) => (
                        <Card
                            key={album.id}
                            image={album.image}
                            title={album.title}
                            follows={album.follows}
                            likes={album.likes}
                            type={type}
                        />
                    ))}
                </div>) : (
                <Carousel items={data || []} renderItem={renderCard} />
            )}

        </div>
    );
}

export default Section;