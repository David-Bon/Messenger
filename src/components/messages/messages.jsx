import React, {useState} from "react";
import "./messages.scss"
import classNames from 'classnames';

const Messages = ({messagesData, addMessageToUser, replyMessage, userId, dummy}) => {
    const [inputValue, setInputValue] = useState('')
    const sendMessage = (userId, inputValue, event) => {
        event.preventDefault()
        setInputValue('')
        const myOwnMessage = true
        addMessageToUser(userId, inputValue, myOwnMessage)
        replyMessage(userId)
    }
    return (
        <div>
            <div className="messageContainer">
                {messagesData.map((item) => {
                    return <div ref={dummy} key={item.messId}
                                className={classNames('messageBody', {'ownMessage': item.isOwn})}>
                        <div>{item.messValue}</div>
                        <div>{item.messDate}</div>
                    </div>
                })
                }

            </div>
            <form className="formInput">
                <input className="textInput" value={inputValue}
                       onChange={(event => {
                           setInputValue(event.target.value)
                       })} placeholder="enter message here"/>
                <button type="submit" className="submitButton"
                        onClick={(event) => sendMessage(userId, inputValue, event)}>(=>)
                </button>
            </form>
        </div>

    )
}

export default Messages