import {ON_MESSAGE_ADD, SET_FILTERED_USERS} from "./reducer";
import * as moment from "moment";
import * as axios from "axios";


const setNewUsersToStore = (newUsers) => ({
    type: ON_MESSAGE_ADD,
    payload: newUsers
})

export const replyMessage = (id) => (dispatch) => {
    setTimeout(()=>{
        axios.get(`https://api.chucknorris.io/jokes/random`)
            .then(response => {
                dispatch(addMessageToUser(id, response.data.value, false,))
            })
    }, 12000)
}



export const addMessageToUser = (id, message, isOwner) => (dispatch, getStore) => {
    const store = getStore();
    const users = store.Reducer.users;
    const newMessageObj = {
        messId: 4,
        messValue: message,
        isOwn: isOwner,
        messDate: moment().format('lll')
    }
    let newMessages = [];
    let newUser = {};
    let newUsers = [];
    let userIndex = -1;

    users.map((user, userIdx) => {
        if (user.id === Number(id)) {
            userIndex = userIdx;

            newMessages = [...user.messagesData, newMessageObj];

            newUser = {
                ...user,
                messagesData: newMessages
            }
        }
    })

     newUsers = [
        ...users.slice(0, userIndex),
        newUser,
        ...users.slice(userIndex + 1)
    ]

    dispatch(setNewUsersToStore(newUsers))

}


export const setSearchUsers = (filteredUsers) => ({
    type: SET_FILTERED_USERS,
    payload: filteredUsers
})