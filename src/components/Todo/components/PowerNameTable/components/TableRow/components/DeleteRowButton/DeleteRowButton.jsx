import './DeleteRowButton.css'

export const DeleteRowButton = ({deleteRow, toDeleteRowId}) => {
    return <div onClick={() => deleteRow(toDeleteRowId)} className="deleteRowButton"/>
}