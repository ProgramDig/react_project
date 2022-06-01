import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageAction} from "../../redux/messageReduser";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);


    let messageElements = props.state.messageData
        .map(message => <Message message={message.message} id={message.id} />);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        props.dispatch(updateNewMessageAction(newMessage.current.value))
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
                    <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;