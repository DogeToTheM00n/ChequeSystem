import Auth from "./containers/Auth/Auth";
import "./App.css";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu'
function App() {
  return (
    <div className="App">
      <Menu/>
      <Auth />
      <Footer />
    </div>
  );
}

export default App;
