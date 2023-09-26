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

export type PhotoSizeType = {
    small: string,
    large: string
}

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: PhotoSizeType
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
    users: Array<UserType>
}

export type SidebarType = {}

