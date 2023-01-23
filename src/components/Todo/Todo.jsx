import {Title} from "./components/Title";
import './Todo.css'
import {AddRecordForm} from "./components/AddRecordForm";
import {PowerNameTable} from "./components/PowerNameTable";
import {useState} from "react";

export const Todo = () => {
    const [tableContent, setTableContent] = useState([])
    const [tableHeaders] = useState(['№', 'Name', 'Power', 'Status'])

    const deleteRow = (rowId) => {
        console.log(tableContent)
        const newTableContent = tableContent.filter((element) => element[0] !== rowId)
        console.log(newTableContent)
        setTableContent(newTableContent);
    }

    return <div className="todo">
        <Title titleName="Список дел"/>
        <AddRecordForm setTableContent={setTableContent} tableContent={tableContent}></AddRecordForm>
        <PowerNameTable deleteRow={deleteRow} tableHeaders={tableHeaders} tableContent={tableContent}/>
    </div>
}