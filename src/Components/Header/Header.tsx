import React from "react";
import { Container, Image } from "./styles";
import Logo from "../../assets/images/spotify1.svg";

export function Header() {
  return (
    <Container>
      <Image src={Logo} alt="" />
    </Container>
  );
}
