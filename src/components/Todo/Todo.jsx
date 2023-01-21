import {Title} from "./components/Title";
import './Todo.css'
import {AddRecordForm} from "./components/AddRecordForm";
import {PowerNameTable} from "./components/PowerNameTable";
import {useState} from "react";

export const Todo = () => {
    const [tableContent, setTableContent] = useState([])
    const [tableHeaders, __setTableHeaders] = useState(['№', 'Name', 'Power', 'Status'])

    return <div className="todo">
        <Title titleName="Таблица силы и статуса"/>
        <AddRecordForm setTableContent={setTableContent} tableContent={tableContent}></AddRecordForm>
        <PowerNameTable tableHeaders={tableHeaders} tableContent={tableContent}/>
    </div>
}