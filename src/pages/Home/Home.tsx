import React, { useState } from "react";
import { AlbumList } from "../../Components/AlbumList/AlbumList";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Container } from "./styles";

export function Home() {
  const [searchTerm, setSearchTerm] = useState<string>();

  const handleSetTerm = (value: string) => {
    setSearchTerm(value);
  };
  return (
    <Container>
      <SearchBar handleSetTerm={handleSetTerm} searchTerm={searchTerm} />
      <AlbumList
        title={
          searchTerm
            ? `Resultados encontrados para "${searchTerm}"`
            : "Albuns buscados recentemente"
        }
      />
      <AlbumList title="Albuns buscados recentemente" />{" "}
    </Container>
  );
}
