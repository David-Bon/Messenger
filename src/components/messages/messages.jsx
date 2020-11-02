import React, {useEffect, useState} from "react";
import "./messages.scss"
import classNames from 'classnames';
import moment from 'moment';

const Messages = ({messagesData, addMessageToUser, replyMessage, userId, scrollDownRef, setUserProps}) => {
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        setUserProps(userId, Date.now(), "newMessageNotification", false)
    }, [userId, messagesData.length])
    const sendMessage = (userId, inputValue, event) => {
        if (!inputValue) {
            event.preventDefault()
        } else {
            const time = Date.now();
            event.preventDefault()
            setInputValue('')
            const myOwnMessage = true
            let isNewMessage = true
            setTimeout(() => {
                addMessageToUser(userId, inputValue, myOwnMessage, time)
            })
            setUserProps(userId, time, "lastMessageTime", moment(time).valueOf());
            replyMessage(userId, isNewMessage)
        }
    }

    return (
        <div>
            <div className="messageContainer">
                {messagesData.map((item) => {
                    return (
                        <div ref={scrollDownRef} key={item.index}
                             className={classNames('messageBody', {'ownMessage': item.isOwn})}>
                            <div>{item.messValue}</div>
                            <div>{moment(item.messDate).format("DD MMM HH:mm")}</div>
                        </div>
                    )
                })
                }

            </div>
            <form className="formInput">
                <input className="textInput" value={inputValue}
                       onChange={(event => {
                           setInputValue(event.target.value)
                       })} placeholder="enter message here"/>
                <button type="submit" className="submitButton"
                        onClick={(event) => {
                            sendMessage(userId, inputValue, event)
                        }}>=>
                </button>
            </form>
        </div>

    )
}

export default Messages