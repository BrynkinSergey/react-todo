import './AddRecordInput.css'

export const AddRecordInput = ({placeholder, setInputState, inputState}) => {
    const handleChange = (e) => setInputState(e.target.value);

    return <input value={inputState} onChange={handleChange} className="input" type="text" placeholder={placeholder}/>
}