import Cookies from "js-cookie";
import { Redirect, Route, Switch } from "react-router-dom";
import { TOKEN } from "../Utils/constants";
import Home from "../Views/Home/Home";
import Keranjang from "../Views/Home/Keranjang/Keranjang";
import DetailProduk from "../Views/Home/Produk/Components/DetailProduk";
import Login from "../Views/Login/Login";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/produk/:id">
        <DetailProduk />
      </Route>
      <Route path="/keranjang">
        <Keranjang />
      </Route>
      <Route path="/login">
        {Cookies.get(TOKEN) ? <Redirect to="/" /> : <Login />}
      </Route>
      {/* <Route path="/keranjang">
        {Cookies.get(TOKEN) ? <Keranjang /> : <Redirect to="/login" />}
      </Route> */}
      <Route>
        <div className="text-center">404 Not Found</div>
      </Route>
    </Switch>
  );
}

export default Routes;
