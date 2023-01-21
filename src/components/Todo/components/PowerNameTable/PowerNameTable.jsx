import './PowerNameTable.css'
import {TableRow} from "./components/TableRow";
import {TableHeader} from "./components/TableHeader";

export const PowerNameTable = ({tableContent, tableHeaders}) => {
    return <div className="table">
        <TableHeader cells={tableHeaders} className="table__header"/>
        {tableContent.map((row, ind) => <TableRow cells={row} key={`row-${ind}`}/>)}
    </div>
}