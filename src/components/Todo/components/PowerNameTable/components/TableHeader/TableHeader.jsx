import './TableHeader.css'

export const TableHeader = ({cells}) => {
    return <div className="table__row">
        {cells.map((cell, i) => <div
            key={`cell-${i}`}
            className="table__cell">{cell}</div>)}
    </div>
}