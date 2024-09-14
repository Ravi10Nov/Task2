import axios from "axios";
import logo from '../delete.png'


const Message = ({ data, getNotes }) => {

    const deleteNotes = async (id) => {
        try {
            const response = await axios.delete('http://localhost:4500/deleteNotes', { data: { id } })
            alert(response.data)
        }
        catch (err) {
            console.log(err)
            console.error("Error occurred:", err.response.data.message);
        }
        finally {
            getNotes();
        }
    }

    return (
        <div className="message-container">
            {data.map((item) => (
                <div className="message-box" key={item.id}>
                    <div className="message-time-box">
                        <p>{item.message}</p>
                        <p className="time">{item.time}</p>
                    </div>
                    <div>
                        <img src={logo} className="btn" onClick={() => deleteNotes(item.id)} alt="delete-image" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Message;
