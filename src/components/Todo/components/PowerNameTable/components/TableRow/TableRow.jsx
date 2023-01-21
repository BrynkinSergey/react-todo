import './TableRow.css'
import {useState} from "react";

export const TableRow = ({cells}) => {
    const [isShownButton, setIsShowButton] = useState(false)

    return <div className="table__row"
                onMouseEnter={() => setIsShowButton(true)}
                onMouseLeave={() => setIsShowButton(false)}>
        {cells?.map((cell, i) => <div
            key={`cell-${i}`}
            className="table__cell">{cell}</div>)}
        {isShownButton && <div className="deleteRowButton">X</div>}
    </div>
}