import './TableHeader.css'

export const TableHeader = ({cells}) => {
    return <div className="table__header table__row">
        {cells.map((cell, i) => <div
            key={`cell-${i}`}
            className="table__cell table__header-cell">{cell}</div>)}
    </div>
}