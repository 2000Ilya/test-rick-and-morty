import React from "react";
import styles from "./index.module.css";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";

const CharactersList = ({ charactersList }) => {
  return (
    <main className={styles.container}>
      {charactersList.map((character) => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <CharacterCard
            name={character.name}
            status={character.status}
            gender={character.gender}
            origin={character.origin.name}
            characterImage={character.image}
          />
        </Link>
      ))}
    </main>
  );
};

export default CharactersList;
