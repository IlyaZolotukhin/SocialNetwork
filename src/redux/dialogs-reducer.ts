const initialState = {
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

type InitialStateType = typeof initialState

const dialogsReducer = (state:InitialStateType = initialState , action:DialogsReducerActionsType):InitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {...state, newMessageBody: action.body};
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            return {...state, messages: [...state.messages,{id: 6, message: body}], newMessageBody: ''};
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

export type UpdateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyCreator>
export type SendMessageACType = ReturnType<typeof sendMessageCreator>
export type DialogsReducerActionsType = UpdateNewMessageBodyACType | SendMessageACType

export default dialogsReducer;