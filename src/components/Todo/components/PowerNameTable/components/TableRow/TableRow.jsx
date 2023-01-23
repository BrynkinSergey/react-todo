import './TableRow.css'
import {useState} from "react";
import {DeleteRowButton} from "./components/DeleteRowButton";

export const TableRow = ({cells, deleteRow}) => {
    const [isShownButton, setIsShowButton] = useState(false)
    console.log('....cells', cells)

    return <div className="table__row"
                onMouseEnter={() => setIsShowButton(true)}
                onMouseLeave={() => setIsShowButton(false)}>
        {Object.values(cells)?.map((cell, i) => {
            return <div
                key={`cell-${i}`}
                className="table__cell">{cell}</div>
        })}
        {isShownButton && <DeleteRowButton deleteRow={deleteRow} toDeleteRowId={cells.id}/>}
    </div>
}