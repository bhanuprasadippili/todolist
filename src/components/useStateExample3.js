import React, { useState } from "react";
import "../styles/todolist.css";


function ToDoList() {

    const data = {
        text: "",
        id: ""
    }
    const editData = {
        id: "",
        isEdit: false
    }
    const [list, setList] = useState([]);
    const [message, setMessage] = useState(data);
    const [edit, setEdit] = useState(editData);

    const handleChange = (e) => {
        setMessage({ ...message, text: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            text: message.text,
            id: new Date().getTime().toString()
        };

        if (message.text) {
            setList([...list, newTodo]);
            setMessage({
                text: "",
                id: ""
            })
        }
    }

    const handleDelete = (id) => {
        let newTodos = list.filter((e) => {
            return e.id != id
        })
        setList(newTodos);
    }
    const handleEdit = (id) => {

        setEdit({
            ...edit,
            id: id,
            isEdit: true
        });
        let editItem = list.find((e) => e.id === id)
        setMessage({
            ...message,
            text: editItem.text,
            id: editItem.id
        });
    }

    const handleEditing = (e) => {
        e.preventDefault();

        let newToDos = list.map((e) => {
            console.log(edit);
            if (e.id === edit.id) {
                return {
                    text: message.text,
                    id: edit.id
                }
            }
            else {
                return e;
            }
        });
        console.log(newToDos);
        setList(newToDos);
        setMessage({
            text: "",
            id: ""
        });
        setEdit({
            id: "",
            isEdit: false,
        });
    }


    console.log(list)
    return (
        <div className="parent">
            <section className="inp-container">

                <input onChange={handleChange} className="inp" name="message" type="text" value={message.text} placeholder="Enter Notes You Want to Save" />

                {
                    edit.isEdit ? (<button onClick={handleEditing} className="btn">Edit</button>) : (<button onClick={handleSubmit} className="btn">ADD</button>)
                }

            </section>
            {list.length === 0 && <h4>EMPTY</h4>}
            <section>
                {
                    list.map((e) => {
                        const { text, id } = e;
                        if (text) {
                            return (
                                <React.Fragment key={id}>
                                    <div className="content-container" key={id}>
                                        <div className="content">{text}</div>
                                        <button onClick={() => handleEdit(id)} className="edit-btn">Edit</button>
                                        <button onClick={() => handleDelete(id)} className="delete-btn">Delete</button>
                                    </div>
                                    <hr />
                                </ React.Fragment >
                            )

                        }

                    })
                }
            </section>
        </div>
    )

}
export default ToDoList;