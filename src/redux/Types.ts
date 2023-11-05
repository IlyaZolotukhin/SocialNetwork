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

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoSizeType
}

export type ProfilePageType = {
    profile: ProfileType
    status: string
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type UsersPageType = {
    items: Array<UserType>,
    totalCount: 30,
    error: null
}

export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type SidebarType = {}

