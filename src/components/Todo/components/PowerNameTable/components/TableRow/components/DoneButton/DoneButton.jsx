import './DoneButton.css'

export const DoneButton = ({changeStatus, rowId, status}) => {
    const className = status === 'active' ? 'doneButton' : 'cancelButton'
    return <div onClick={() => changeStatus(rowId)} className={className}></div>
}