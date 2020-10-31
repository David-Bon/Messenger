import {ON_MESSAGE_ADD, SET_FILTERED_USERS, UPDATE_USER_LIST} from "./reducer";
import * as moment from "moment";
import * as axios from "axios";


const setNewUsersToStore = (newUsers) => ({
    type: ON_MESSAGE_ADD,
    payload: newUsers
})

export const replyMessage = (id, scrollDown) => (dispatch) => {
    setTimeout(() => {
        axios.get(`https://api.chucknorris.io/jokes/random`)
            .then(response => {
                dispatch(addMessageToUser(id, response.data.value, false, scrollDown))
            })
    }, 12000)
}


export const ReRenderUsersList = () => ({
    type: UPDATE_USER_LIST
})


export const addMessageToUser = (id, message, isOwner, scrollDown) => (dispatch, getStore) => {
    const store = getStore();
    const users = store.Reducer.users;


    const newMessageObj = {
        messId: 6,
        messValue: message,
        isOwn: isOwner,
        messDate: moment().format('MMM Do YYYY, h:mm:ss a')
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
    scrollDown()
}


export const setSearchUsers = (filteredUsers) => ({
    type: SET_FILTERED_USERS,
    payload: filteredUsers
})