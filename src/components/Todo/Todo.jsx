import {Title} from "./components/Title";
import './Todo.css'
import {AddRecordForm} from "./components/AddRecordForm";
import {PowerNameTable} from "./components/PowerNameTable";
import {useState} from "react";

export const Todo = () => {
    const [tableContent, setTableContent] = useState([])
    const [tableHeaders] = useState(['№', 'Дело', 'Описание', 'Статус'])

    const deleteRow = (rowId) => {
        const newTableContent = tableContent.filter((element) => {
            return element.id !== rowId
        })

        setTableContent(newTableContent);
    }

    return <div className="todo">
        <Title titleName="Список дел"/>
        <AddRecordForm setTableContent={setTableContent} tableContent={tableContent}></AddRecordForm>
        <PowerNameTable deleteRow={deleteRow} tableHeaders={tableHeaders} tableContent={tableContent}/>
    </div>
}