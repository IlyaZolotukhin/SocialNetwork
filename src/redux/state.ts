export type DialogType ={
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType ={
    _state: RootStateType
    updateNewPostText:(newText: string)=> void
    addPost:(postMessage: string) => void
    _callSubscriber:() =>void
    subscribe:(observer: () => void ) =>void
    getState:() => RootStateType
}

const store: StoreType = {
    _state: {
    profilePage: {
        newPostText: "",
        posts:[
            {id: 1, message: "Hello!", likesCount: 10},
            {id: 2, message: "GoodBuy!", likesCount: 20}]
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: "Ilya"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Andrey"},
            {id: 4, name: "Svetlana"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],

        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "ok"},
            {id: 4, message: "ok"},
            {id: 5, message: "ok"}
        ]
    },
    sidebar: {}
},
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    addPost(postMessage: string){
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    _callSubscriber(){
        console.log('state was changed');
    },
    getState() {
        return this._state;
    }
}

export default store;
