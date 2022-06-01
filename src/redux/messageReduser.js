import {incrementId} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const messageReducer = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: incrementId(state.messageData),
                message: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            break;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageAction = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newText: text
    }
}

export default messageReducer;