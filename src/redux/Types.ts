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

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    photoUrl:string
    location: LocationType
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

export type UsersPageType = {
    users: Array<UsersType>
}

export type SidebarType = {}

