import * as types from './../constants/ActionTypes'
import * as message_const from './../constants/Message'
var initialState=message_const.MSG_WELECOME;
const message=(state=initialState,action)=>{
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default:return state;
    }
}
export default message;