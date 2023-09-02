export type DialogType = {
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
    newMessageBody: string
}

export type SidebarType = {}

