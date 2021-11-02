import Auth from "./containers/Auth/Auth";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu/Menu";
import ChequeVerify from "./containers/ChequeVerify/ChequeVerify";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CustomerDashboard from "./containers/CustomerDashboard/CustomerDashboard";
import axios from "./chequeAxios";
import generateClientKeyPair from "./utilities/generateClientKeyPair";
import React, { Component } from "react";
import AdminDashboard from "./containers/AdminDashboard/AdminDashboard";

class App extends Component {
  componentDidMount() {
    axios.get("/api/getPublicKey").then((res) => {
      this.props.setServerPublicKey(res.data);
    });
    generateClientKeyPair().then((clientPublicKey) => {
      this.props.setClientPublicKey(clientPublicKey);
    });
  }
  render() {
    return (
      <div className="App">
        {this.props.location.pathname !== "/auth" &&
          this.props.location.pathname !== "/admin" && <Menu />}
        <Switch>
          <Route path="/chequeVerify" component={ChequeVerify} />
          <Route path="/auth" component={Auth} />
          <Route path="/admin" component={Auth} />
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Route path="/" component={CustomerDashboard} />
          <Route path="*" component={Auth} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setServerPublicKey: (key) =>
      dispatch({ type: "SET_SERVER_PUBLIC_KEY", key: key }),
    setClientPublicKey: (key) =>
      dispatch({ type: "SET_CLIENT_PUBLIC_KEY", key: key }),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(App));
