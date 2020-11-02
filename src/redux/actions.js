import {ON_MESSAGE_ADD, SET_FILTERED_USERS, UPDATE_USER_LIST} from "./reducer";
import * as axios from "axios";
import moment from "moment";

const setNewUsersToStore = (newUsers) => ({
    type: ON_MESSAGE_ADD,
    payload: newUsers
})

const updateUsersList = (users) => ({
    type: UPDATE_USER_LIST,
    payload: users
})

export const setSearchUsers = (filteredUsers) => ({
    type: SET_FILTERED_USERS,
    payload: filteredUsers
})

export const replyMessage = (id, isNewMessage) => (dispatch) => {
    setTimeout(() => {
        const time = Date.now();
        axios.get(`https://api.chucknorris.io/jokes/random`)
            .then(response => {
                dispatch(addMessageToUser(id, response.data.value, false, time))
                dispatch(setUserProps(id, time, "lastMessageTime", moment(time).valueOf()))
                dispatch(setUserProps(id, time, "newMessageNotification", isNewMessage))
            })
    }, 10000)
}

export const addMessageToUser = (id, message, isOwner, time) => (dispatch, getStore) => {
    const store = getStore();
    const users = store.Reducer.users;


    const newMessageObj = {
        messValue: message,
        isOwn: isOwner,
        messDate: time
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


export const setUserProps = (id, time, props, valueProps) => (dispatch, getStore) => {
    const store = getStore()
    const users = store.Reducer.users
    let userIndex = -1
    let newUser = {};
    let newUsers = [];

    users.map((item, userIdx) => {
        if (Number(id) === item.id) {
            userIndex = userIdx

            newUser = {
                ...item,
                [props]: valueProps
            }
        }

    })

    newUsers = [
        ...users.slice(0, userIndex),
        newUser,
        ...users.slice(userIndex + 1)
    ]

    dispatch(updateUsersList(newUsers))
}