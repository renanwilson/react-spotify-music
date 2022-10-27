import React, { useState } from "react";
import { AlbumList } from "./Components/AlbumList/AlbumList";
import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { Router } from "./Router/routes";
import { Base } from "./template/base/base";

function App() {
  return (
    <Base>
      <Header />
      <Router />
    </Base>
  );
}

export default App;
