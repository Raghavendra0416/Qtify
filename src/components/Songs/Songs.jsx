import { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import styles from "./Songs.module.css";
import Section from "../Section/Section";
import axios from "axios";

function Songs() {
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedTab, setSelectedTab] = useState("all");

    useEffect(() => {
        axios.get("https://qtify-backend.labs.crio.do/songs")
            .then((response) => setSongs(response.data))
            .catch((error) => console.error("Error fetching songs:", error));

        axios.get("https://qtify-backend.labs.crio.do/genres")
            .then((response) => setGenres(response.data.data))
            .catch((error) => console.error("Error fetching genres:", error));
    }, []);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const filteredSongs = selectedTab === "all"
        ? songs
        : songs.filter((song) => song.genre.key === selectedTab);

    return (
        <Section title="Songs" data={filteredSongs} type="songs">

            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                classes={{ root: styles.tabs, indicator: styles.indicator }}
            >
                <Tab
                    label="All"
                    value="all"
                    classes={{ root: styles.tab, selected: styles.selectedTab }}
                />

                {genres.map((genre) => (
                    <Tab
                        key={genre.key}
                        label={genre.label}
                        value={genre.key}
                        classes={{ root: styles.tab, selected: styles.selectedTab }}
                    />
                ))}
            </Tabs>

        </Section>
    );
}

export default Songs;