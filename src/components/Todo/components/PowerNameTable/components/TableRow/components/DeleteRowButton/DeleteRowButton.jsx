import './DeleteRowButton.css'

export const DeleteRowButton = ({deleteRow, toDeleteRowId}) => {
    return <button onClick={() => deleteRow(toDeleteRowId)} className="deleteRowButton">X</button>
}