import { ENCRYPT_AUTH_KEY, STORAGE_AUTH_KEY, USER_GROUP_OVERRIDE } from "./conf";
import { IUser } from "./models/auth";
import { decrypter, encrypter } from "./utils"


const authToStorage = (data: any) => {
    const crypted = encrypter(data, ENCRYPT_AUTH_KEY)
    localStorage.setItem(STORAGE_AUTH_KEY, crypted);
}

const authFromStorage = (): {
    token?: string,
    tokenType?: string,
    user?: IUser
} => {
    const data = decrypter(localStorage.getItem(STORAGE_AUTH_KEY), ENCRYPT_AUTH_KEY);
    if(USER_GROUP_OVERRIDE.length > 0) { 
        data?.user?.groups?.forEach(group => {
            group.name = USER_GROUP_OVERRIDE
        })
    }
    return data
}

const authLogout = () => {
    localStorage.removeItem(STORAGE_AUTH_KEY);
}

export { authToStorage, authFromStorage, authLogout }