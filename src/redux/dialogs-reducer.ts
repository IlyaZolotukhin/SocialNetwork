import {ActionsTypes, DialogPageType} from "./store";

const initialState: DialogPageType = {
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
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'} as const)

export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}

export default dialogsReducer;