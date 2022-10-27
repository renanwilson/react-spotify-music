import React from "react";
import { Container, Title, Description, Image } from "./styles";

export function AlbumItem() {
  return (
    <Container>
      <Image />
      <Title>Nome do Album</Title>
      <Description>Nome do artista</Description>
    </Container>
  );
}
