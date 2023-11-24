import {InitialStateType} from "../redux/users-reducer";
import {UserType} from "../redux/Types";

export const updateObjectInArray = (items: InitialStateType, itemId: number, objPropName: keyof UserType, newObjProps: any) => {
    return items.users.map(u =>u[objPropName] === itemId ? {...u,...newObjProps}: u)
}