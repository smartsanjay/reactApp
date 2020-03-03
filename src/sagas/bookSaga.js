import * as ACTION_TYPES from "../constants/action_type"
import {put, takeEvery} from 'redux-saga/effects';
import {handleSuccess } from "../actions";
function* handleRoute(action){
    if(action.type){
        try{
            if(action.type==="ADD_BOOK"){
                yield put(handleSuccess(action.type,action.payload));
                yield put(handleSuccess("RESET",action.payload));
            }else{
                yield put(handleSuccess(action.type,action.payload));
            }
            
        }catch(error){
            console.log(error)
        }
    }
    
}

export default function* bookSaga(){
    yield takeEvery([
        ACTION_TYPES.CHANGE_NAME,
        ACTION_TYPES.CHANGE_AUTHER,
        ACTION_TYPES.CHANGE_DESC,
        ACTION_TYPES.CHANGE_QTY,
        ACTION_TYPES.ADD_BOOK,
        ACTION_TYPES.SEARCH_BOOKS

    ],handleRoute);
   
}