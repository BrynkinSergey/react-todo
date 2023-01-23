import {AddRecordButton} from "./components/AddRecordButton";
import './AddRecordFrom.css'
import {AddRecordInput} from "./components/AddRecordInput";
import {useState} from "react";

export const AddRecordForm = ({setTableContent, tableContent}) => {
    const [firstInputValue, setFirstInputValue] = useState('')
    const [secondInputValue, setSecondInputValue] = useState('')

    const handleClick = () => {
        const newNumber = tableContent.length ? tableContent[tableContent.length - 1].id + 1 : 1;
        setTableContent([...tableContent, {
            id: newNumber,
            todoName: firstInputValue,
            todoDescription: secondInputValue,
            status: 'active'
        }])
        setFirstInputValue('')
        setSecondInputValue('')
    }

    return <div className="form">
        <AddRecordInput inputState={firstInputValue} setInputState={setFirstInputValue} placeholder="Дело"/>
        <AddRecordInput inputState={secondInputValue} setInputState={setSecondInputValue}
                        placeholder="Описание"/>
        <AddRecordButton buttonText="Добавить" onClick={handleClick}/>
    </div>
}