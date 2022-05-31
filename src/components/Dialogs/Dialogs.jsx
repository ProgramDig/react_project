import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messageElements = props.state.messageData
        .map(message => <Message message={message.message} id={message.id} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogs_item}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messageElements}
                </div>
            </div>
            <div className={style.addMessage}>
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;