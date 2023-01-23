import {Title} from "./components/Title";
import './Todo.css'
import {AddRecordForm} from "./components/AddRecordForm";
import {PowerNameTable} from "./components/PowerNameTable";
import {useState} from "react";

export const Todo = () => {
    const [tableContent, setTableContent] = useState([])
    const [tableHeaders] = useState(['№', 'Дело', 'Описание', 'Статус'])

    const deleteRow = (rowId) => setTableContent(tableContent.filter((element) => element.id !== rowId));


    const changeStatus = (rowId) => {
        const newTableContent = JSON.parse(JSON.stringify(tableContent))
        const rowIndex = newTableContent.findIndex((element) => element.id === rowId)
        newTableContent[rowIndex].status = newTableContent[rowIndex].status === 'active' ? 'done' : 'active'
        setTableContent(newTableContent)
    }

    return <div className="todo">
        <Title titleName="Список дел"/>
        <AddRecordForm setTableContent={setTableContent} tableContent={tableContent}></AddRecordForm>
        <PowerNameTable changeStatus={changeStatus} deleteRow={deleteRow} tableHeaders={tableHeaders}
                        tableContent={tableContent}/>
    </div>
}