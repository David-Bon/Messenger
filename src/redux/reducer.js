import userPhoto1 from '../assets/images/image1.jpg'
import userPhoto2 from '../assets/images/image2.jpg'
import userPhoto3 from '../assets/images/image3.jpg'
import userPhoto4 from '../assets/images/image4.jpg'
import * as moment from 'moment';

export const UPDATE_USER_LIST = 'UPDATE_USER_LIST';
export const SET_FILTERED_USERS = 'SET_FILTERED_USERS';
export const ON_MESSAGE_ADD = 'ON_MESSAGE_ADD';
export const USER_INFO_SET = 'USER_INFO_SET';
export const ACTIVE_USERID_CHECK = 'ACTIVE_USERID_CHECK';
const localDate = (yyyy, mm, dd, hh, min) => {
    return moment([yyyy, mm, dd, hh, min])
}
let initialState =
    {
        users: [
            {
                id: 1,
                image: userPhoto1,
                name: 'Frank Gonzalez',
                lastMessageTime: moment(localDate(2019, 9, 25, 12, 1)).valueOf(),
                newMessageNotification: false,
                messagesData: [
                    {
                        isOwn: null,
                        messValue: 'Hi there!',
                        messDate: localDate(2019, 9, 23, 9, 42)
                    },
                    {
                        isOwn: null,
                        messValue: 'how`s it going?',
                        messDate: localDate(2019, 9, 24, 16, 26)
                    },
                    {
                        isOwn: null,
                        messValue: 'can`t wait to see you!',
                        messDate: localDate(2019, 9, 25, 12, 1)
                    },
                ],
            },

            {
                id: 2,
                image: userPhoto2,
                name: 'Austin Bootman',
                newMessageNotification: false,
                lastMessageTime: moment(localDate(2017, 2, 26, 18, 50)).valueOf(),
                messagesData: [
                    {
                        isOwn: null,
                        messValue: 'China rules!',
                        messDate: localDate(2017, 2, 26, 17, 11)
                    },

                    {
                        isOwn: null,
                        messValue: 'Zhong Ming dynasty forever!',
                        messDate: localDate(2017, 2, 26, 18, 28)
                    },

                    {
                        isOwn: null,
                        messValue: 'diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi!',
                        messDate: localDate(2017, 2, 26, 18, 50)
                    },
                ],
            },

            {
                id: 3,
                image: userPhoto3,
                name: 'Lois Adams',
                newMessageNotification: false,
                lastMessageTime: moment(localDate(2015, 5, 26, 17, 11)).valueOf(),
                messagesData: [
                    {
                        isOwn: null,
                        messValue: 'Guys, your test tasks is too hard for trainee',
                        messDate: localDate(2015, 5, 26, 17, 11)
                    },

                    {
                        isOwn: null,
                        messValue: 'anyway it was great experience',
                        messDate: localDate(2015, 5, 26, 17, 11)
                    },

                    {
                        isOwn: null,
                        messValue: 'ill wait for your callback',
                        messDate: localDate(2015, 5, 26, 17, 11)
                    },
                ],
            },

            {
                id: 4,
                image: userPhoto4,
                name: 'Christine Onana',
                newMessageNotification: false,
                lastMessageTime: moment(localDate(2015, 1, 26, 17, 11)).valueOf(),
                messagesData: [
                    {
                        isOwn: null,
                        messValue: 'Good morning mr.president!',
                        messDate: localDate(2015, 1, 26, 17, 11)
                    },

                    {
                        isOwn: null,
                        messValue: 'your declaration is ready?',
                        messDate: localDate(2015, 1, 26, 17, 11)
                    },

                    {
                        isOwn: null,
                        messValue: 'you have to speed up!',
                        messDate: localDate(2015, 1, 26, 17, 11)
                    },
                ],
            },
        ],
    };


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MESSAGE_ADD:
            return {
                ...state, users: action.payload
            }

        case SET_FILTERED_USERS:
            return {
                ...state, users: action.payload
            }

        case UPDATE_USER_LIST:
            return {
                ...state,
                users: action.payload
            }

        default:
            return state;
    }
}