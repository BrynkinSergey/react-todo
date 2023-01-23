import './AddRecordButton.css'

export const AddRecordButton = ({buttonText, onClick}) => <div className="button"
                                                               onClick={onClick}>{buttonText}</div>
