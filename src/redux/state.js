const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let store = {
    _state: {
        profilePage: {
            postsData:[
                {id:1, message:'Hi, how are you?', likesCount: 12},
                {id:2, message:'It\'s my first post', likesCount: 43}
            ],
            newPostText: ''
        },
        messagePage: {
            messageData:[
                {id:1, message:'Hi, my friend!'},
                {id:2, message:'How are you?'},
                {id:3, message:'Set me please!'}
            ],
            dialogsData:[
                {id:1, name:'Alex'},
                {id:2, name:'Andrew'},
                {id:3, name:'Dmytro'},
                {id:4, name:'Valera'},
                {id:5, name:'Nazar'}
            ],
            newMessageText: ''
        },
        navBarPage: {
            friendData:[
                {name: 'Alex', href:'https://i.pinimg.com/736x/66/47/e9/6647e94ebc652c4505b493cd6c27f791.jpg'},
                {name: 'Dmytro', href:'https://thypix.com/wp-content/uploads/2021/10/grey-anime-profile-picture-thypix-114-700x700.jpg'},
                {name: 'Feel', href:'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state change')
    },

    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe; // pattern observer
    },

    incrementId(data){
        return data.length + 1;
    },

    addMessage(){
        let newMessage = {
            id: this.incrementId(this._state.messagePage.messageData),
            message: this._state.messagePage.newMessageText
        };
        this._state.messagePage.messageData.push(newMessage);
        this._state.messagePage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessage(newText) {
        this._state.messagePage.newMessageText = newText;
        this._callSubscriber(this._state)
    },
    addPost() {
        let newPost = {
            id: this.incrementId(this._state.profilePage.postsData),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {  // {type: 'ADD-POST' }
        if(action.type === ADD_POST) {
            this.addPost()
        } else if(action.type === UPDATE_NEW_POST_TEXT){
            this.updateNewPostText(action.newText)
        } else if(action.type === ADD_MESSAGE) {
            this.addMessage()
        } else if(action.type === UPDATE_NEW_MESSAGE) {
            this.updateNewMessage(action.newText)
        }
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

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextAction = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store;
window.store = store;