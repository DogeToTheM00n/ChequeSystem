import classes from "./AdminDashboard.module.css";
import { useState, useEffect } from "react";
import axios from "../../chequeAxios";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [showDepositModal, setShowDepositModal] = useState(false);
  const handleClose = () => setShowDepositModal(false);
  const handleShow = () => setShowDepositModal(true);
  const [reload, setReload] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  if (!auth) {
    history.push("/admin");
  } else {
    if (user.name !== null) {
      history.push("/");
    }
  }
  useEffect(() => {
    const func = async () => {
      const res = await axios.get("/api/adminDashboard");
      setTransactions(res.data);
    };
    func();
  });
  return (
    auth &&
    user.name === null && (
      <div className={classes.Parent}>
        <h2 className={classes.H2}>Pending Requests({transactions.length})</h2>
        {transactions.map((transaction) => (
          <div className={classes.Child}>
            <p>{transaction}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default AdminDashboard;
