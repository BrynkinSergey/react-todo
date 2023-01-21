import './AddRecordButton.css'

export const AddRecordButton = ({buttonText, onClick}) => <button className="button"
                                                                  onClick={onClick}>{buttonText}</button>
