import {AddRecordButton} from "./components/AddRecordButton";
import './AddRecordFrom.css'
import {AddRecordInput} from "./components/AddRecordInput";
import {useState} from "react";

export const AddRecordForm = ({setTableContent, tableContent}) => {
    const [firstInputValue, setFirstInputValue] = useState('')
    const [secondInputValue, setSecondInputValue] = useState('')

    const handleClick = () => {
        setTableContent([...tableContent, [tableContent.length + 1, firstInputValue, secondInputValue, 'active']])
        setFirstInputValue('')
        setSecondInputValue('')
    }

    return <div className="form">
        <AddRecordInput inputState={firstInputValue} setInputState={setFirstInputValue} placeholder="Type name..."/>
        <AddRecordInput inputState={secondInputValue} setInputState={setSecondInputValue}
                        placeholder="Type power..."/>
        <AddRecordButton buttonText="Add" onClick={handleClick}/>
    </div>
}