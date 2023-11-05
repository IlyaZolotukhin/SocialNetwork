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
    ]
};
type InitialStateType = typeof initialState

const dialogsReducer = (state:InitialStateType = initialState , action:DialogsReducerActionsType):InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = action.newMessageBody;
            return {...state, messages: [...state.messages,{id: 6, message: body}]};
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody: string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)

export type SendMessageACType = ReturnType<typeof sendMessageCreator>
export type DialogsReducerActionsType = SendMessageACType

export default dialogsReducer;