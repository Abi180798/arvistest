import { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CarouselHome from "./Components/CarouselHome";
import NavbarHome from "./Components/NavbarHome";
import Kategori from "./Kategori/Kategori";
import DetailProduk from "./Produk/Components/DetailProduk";

function Home() {
  let { path, url } = useRouteMatch();
  console.log(path);
  const [keranjang, setKeranjang] = useState({
    data: [],
  });
  return (
    <div>
      <NavbarHome />
      <CarouselHome />
      <Kategori />
    </div>
  );
}

export default Home;
