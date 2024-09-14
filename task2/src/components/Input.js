import { useEffect, useState } from "react";
import axios from "axios";
import Message from "./Message";


const Input = () => {

    const [message, setMessage] = useState('');

    const [showMessage, setShowMessage] = useState([]);

    useEffect(() => {
        getMessage()
    }, [])

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (message.length <= 0) {
            alert('Please add some notes.')
            return;
        }
        try {
            const response = await axios.post('http://localhost:4500/createNotes', { message: message });
            console.log(response.data)
            alert(response.data.message)
        }
        catch (err) {
            console.log("Error occurred:", err.response.data.message);
        } finally {
            getMessage();
            setMessage('')
        }
    }

    const getMessage = async () => {
        try {
            const response = await axios.get('http://localhost:4500/getMessage');
            setShowMessage(response.data)
        }
        catch (err) {
            console.error("Error occurred:", err.response.data.message);
        }
    }

    return (
        <>
            <div className="input-container">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={message} onChange={handleChange} placeholder="Take a notes..." />
                    <button type="submit">Add Notes</button>
                </form>
            </div>
            <Message data={showMessage} getNotes={getMessage} />
        </>
    )
}

export default Input;