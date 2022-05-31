let state = {
    profilePage: {
        postsData:[
            {id:1, message:'Hi, how are you?', likesCount: 12},
            {id:2, message:'It\'s my first post', likesCount: 43}
        ]
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
        ]
    },
    navBarPage: {
        friendData:[
            {name: 'Alex', href:'https://i.pinimg.com/736x/66/47/e9/6647e94ebc652c4505b493cd6c27f791.jpg'},
            {name: 'Dmytro', href:'https://thypix.com/wp-content/uploads/2021/10/grey-anime-profile-picture-thypix-114-700x700.jpg'},
            {name: 'Feel', href:'https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg'},
        ]
    }
}

export default state;