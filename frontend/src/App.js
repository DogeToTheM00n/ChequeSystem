import Auth from "./containers/Auth/Auth";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu";
import ChequeVerify from "./containers/ChequeVerify/ChequeVerify";
import CustomerDashboard from "./containers/CustomerDashboard/CustomerDashboard";

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <CustomerDashboard /> */}
      {/* <Auth /> */}
      <ChequeVerify />
      <Footer />
    </div>
  );
}

export default App;
