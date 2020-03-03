import * as ACTION_TYPES from "../constants/action_type"
export function addBook(action){
    return {
        type:ACTION_TYPES.ADD_BOOK,
        payload:action.payload
    }
}
export function searchBook(action){
    return {
        type:ACTION_TYPES.SEARCH_BOOKS,
        payload:action.payload
    }
}
export function listBook(action){
    return {
        type:ACTION_TYPES.LIST_BOOKS,
        payload:action.payload
    }
}
export function changeDesc(action){
    return {
        type:ACTION_TYPES.CHANGE_DESC,
        payload:action.payload
    }
}
export function changeAuther(action){
    return {
        type:ACTION_TYPES.CHANGE_AUTHER,
        payload:action.payload
    }
}
export function changeName(action){
    return {
        type:ACTION_TYPES.CHANGE_NAME,
        payload:action.payload
    }
}
export function changeQty(action){
    return {
        type:ACTION_TYPES.CHANGE_QTY,
        payload:action.payload
    }
}
export function handleSuccess(action,payload){
    return {
        id:action,
        type:ACTION_TYPES.HANDLE_SUCCESS,
        payload:payload
    }
}
