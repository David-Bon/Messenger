import userPhoto1 from "../assets/images/image1.jpg";
import userPhoto2 from "../assets/images/image2.jpg";
import userPhoto3 from "../assets/images/image3.jpg";
import userPhoto4 from "../assets/images/image4.jpg";
const date = new Date()
const UsersService = [

    {
        id: 1,
        image: userPhoto1,
        name: 'Frank Gonzalez',
        messageValue: 'Some message',
        deliveryDate: 'Jun 19, 2018',
        messagesData: [
            {
                messId: 1,
                messValue: 'Hi there!',
                messDate: date
            },

            {
                messId: 2,
                messValue: 'how`s it going?',
                messDate: date
            },

            {
                messId: 3,
                messValue: 'can`t wait to see you!',
                messDate: date
            },
        ],
    },

    {
        id: 2,
        image: userPhoto2,
        name: 'Austin Bootman',
        messageValue: 'Some message',
        deliveryDate: 'Jun 9, 2018',
        messagesData: [
            {
                messId: 1,
                messValue: 'asdas!',
                messDate: date
            },

            {
                messId: 2,
                messValue: 'how`wa it gawdoing?',
                messDate: date
            },

            {
                messId: 3,
                messValue: 'wagwanda!',
                messDate: date
            },
        ],
    },

    {
        id: 3,
        image: userPhoto3,
        name: 'Lois Adams',
        messageValue: 'Some message',
        deliveryDate: 'Jun 3, 2018',
        messagesData: [
            {
                messId: 1,
                messValue: 'lorem*10',
                messDate: date
            },

            {
                messId: 2,
                messValue: 'sdklfjdf lskdjgskdlf kjdh?',
                messDate: date
            },

            {
                messId: 3,
                messValue: 'sdf`t dasf sdf asdf s!',
                messDate: date
            },
        ],
    },

    {
        id: 4,
        image: userPhoto4,
        name: 'Christine Ferguson',
        messageValue: 'Some message',
        deliveryDate: 'Jun 1, 2018',
        messagesData: [
            {
                messId: 1,
                messValue: 'Hasdasdre!',
                messDate: date
            },

            {
                messId: 2,
                messValue: 'haghbbing?',
                messDate: date
            },

            {
                messId: 3,
                messValue: 'cdsgeyou!',
                messDate: date
            },
        ],
    },

]

function getData() {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(UsersService)
        }, 1300)
    }))
}

// export function getMessagesData(userId) {
//  return new Promise((resolve => {
//      resolve.filter((id) => id===userId)
//          .then(resolve=> resolve)
//  }))
// }

export default UsersService