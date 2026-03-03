import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Section from "./components/Section/Section";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    //Top Albums
    axios.get("https://qtify-backend.labs.crio.do/albums/top")
      .then((response) => {
        setTopAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching top albums:", error);
      });

    //New Albums
    axios.get("https://qtify-backend.labs.crio.do/albums/new")
      .then((response) => {
        setNewAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching new albums:", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar searchData={topAlbums} />
      <Hero />
      {/* Top Albums */}
      <Section title="Top Albums" data={topAlbums} type="top" />

      {/* New Albums*/}
      <Section title="New Albums" data={newAlbums} type="new" />
    </div>
  );
}

export default App;