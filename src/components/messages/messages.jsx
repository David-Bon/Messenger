import React, {useState} from "react";
import "./messages-module.scss"
import classNames from 'classnames';

const Messages = ({messagesData, addMessageToUser, replyMessage, userId}) => {

    const [inputValue, setInputValue] = useState('')
    const sendMessage = (userId, inputValue) => {
        const myOwnMessage = true
        setInputValue('')
        addMessageToUser(userId, inputValue, myOwnMessage)
        replyMessage(userId)
    }
    return (
        <div className="messageContainer">

            {messagesData.map((item) => {
                return <div key={item.messId} className={classNames('messageBody', {'ownMessage': item.isOwn})}>
                    <div>{item.messValue}</div>
                    <div>{item.messDate}</div>
                </div>
            })
            }
            <div key={messagesData.messId} className="mainText">
                <input type="text" value={inputValue}
                       onChange={(event => {
                           setInputValue(event.target.value)
                       })} placeholder="enter message here"/>
                <button onClick={() => sendMessage(userId, inputValue)}>Submit</button>
            </div>
        </div>
    )
}

export default Messages