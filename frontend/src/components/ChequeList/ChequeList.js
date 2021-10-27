import ChequeListItem from "../ChequeListItem/ChequeListItem"
import { useState } from "react"
import classes from './ChequeList.module.css'

const ChequeList = () => {
    const [filter, setFilter] = useState(0)
    return (
        <>
            <div className={classes.List}>
                <div className={classes.Filters}>
                    <div className={filter === 0 ? classes.Button : classes.ButtonInactive} onClick={() => setFilter(0)}>Pending</div>
                    <div className={filter === 1 ? classes.Button : classes.ButtonInactive} onClick={() => setFilter(1)}>Active</div>
                    <div className={filter === 2 ? classes.Button : classes.ButtonInactive} onClick={() => setFilter(2)}>Declined</div>
                </div>
                <ChequeListItem status="1" />
            </div>
        </>
    )
}

export default ChequeList