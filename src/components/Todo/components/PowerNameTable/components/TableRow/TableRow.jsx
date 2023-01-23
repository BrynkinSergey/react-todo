import './TableRow.css'
import {useState} from "react";
import {DeleteRowButton} from "./components/DeleteRowButton";
import {OptionsButton} from "./components/OptionsButton";
import {DoneButton} from "./components/DoneButton";

export const TableRow = ({changeStatus, cells, deleteRow}) => {
    const [shownContent, setShownContent] = useState(null)

    return <div className="table__row"
                onMouseEnter={() => !shownContent ? setShownContent('options') : shownContent}
                onMouseLeave={() => setShownContent(null)}>
        {Object.values(cells)?.map((cell, i) => {
            return <div
                key={`cell-${i}`}
                className="table__cell">{cell}</div>
        })}
        {shownContent === 'options' &&
            <OptionsButton setShownContent={setShownContent}/>}
        {shownContent === 'more' &&
            <div className="moreButtons">
                <DoneButton changeStatus={changeStatus} rowId={cells.id} status={cells.status}/>
                <DeleteRowButton deleteRow={deleteRow} toDeleteRowId={cells.id}/>
            </div>}
    </div>
}