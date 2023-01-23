import './PowerNameTable.css'
import {TableRow} from "./components/TableRow";
import {TableHeader} from "./components/TableHeader";

export const PowerNameTable = ({changeStatus, tableContent, tableHeaders, deleteRow}) => {
    return <div className="table">
        <TableHeader cells={tableHeaders} className="table__header"/>
        {tableContent.map((row, ind) => <TableRow changeStatus={changeStatus} deleteRow={deleteRow} cells={row}
                                                  key={`row-${ind}`}/>)}
    </div>
}