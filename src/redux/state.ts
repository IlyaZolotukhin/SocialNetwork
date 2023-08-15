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
    _callSubscriber:() =>void
    subscribe:(observer: () => void ) =>void
    getState:() => RootStateType
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType ={
    type: "ADD-POST"
}
type UpdateNewPostTextActionType ={
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

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
    _callSubscriber(){
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if (action.type === "ADD-POST"){
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        }else if (action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}

export default store;
