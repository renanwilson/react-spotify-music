import React from "react";
import { AlbumItem } from "../../AlbunsItem/AlbumItem";
import { Container, Subtitle, Wrapper } from "./styles";

type AlbumListProps = {
  title: string;
};
export function AlbumList(props: AlbumListProps) {
  return (
    <Container>
      <Subtitle> {props.title} </Subtitle>
      <Wrapper>
        <AlbumItem /> 
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </Wrapper>
    </Container>
  );
}
