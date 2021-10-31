import ChequeListItem from "../ChequeListItem/ChequeListItem";
import { useState, useEffect } from "react";
import classes from "./ChequeList.module.css";
import axios from "../../chequeAxios";
import { useSelector } from "react-redux";

const ChequeList = (props) => {
  const [filter, setFilter] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const username = useSelector((state) => state.user.username);
  useEffect(() => {
    const func = async () => {
      const res = await axios.get("/api/transactions", {
        params: { username: username },
      });
      setTransactions(res.data);
    };
    func();
  }, [props.reload]);
  return (
    <>
      <div className={classes.List}>
        <div className={classes.Filters}>
          <div
            className={filter === 0 ? classes.Button : classes.ButtonInactive}
            onClick={() => setFilter(0)}
          >
            Pending
          </div>
          <div
            className={filter === 1 ? classes.Button : classes.ButtonInactive}
            onClick={() => setFilter(1)}
          >
            Active
          </div>
          <div
            className={filter === 2 ? classes.Button : classes.ButtonInactive}
            onClick={() => setFilter(2)}
          >
            Declined
          </div>
        </div>
        {transactions.map((transaction) => (
          <ChequeListItem
            status={transaction.chequeStatus}
            id={transaction._id}
            key={transaction._id}
          />
        ))}
      </div>
    </>
  );
};

export default ChequeList;
