import './TableRow.css'
import {useState} from "react";
import {DeleteRowButton} from "./components/DeleteRowButton";

export const TableRow = ({cells, deleteRow}) => {
    const [isShownButton, setIsShowButton] = useState(false)

    return <div className="table__row"
                onMouseEnter={() => setIsShowButton(true)}
                onMouseLeave={() => setIsShowButton(false)}>
        {cells?.map((cell, i) => <div
            key={`cell-${i}`}
            className="table__cell">{cell}</div>)}
        {isShownButton && <DeleteRowButton deleteRow={deleteRow} toDeleteRowId={cells[0]}/>}
    </div>
}