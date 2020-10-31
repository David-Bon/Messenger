import React, {useRef, useState} from "react";
import "./messages-module.scss"
import classNames from 'classnames';

const Messages = ({messagesData, addMessageToUser, replyMessage, userId}) => {
    const dummy = useRef()
    const [inputValue, setInputValue] = useState('')
    const sendMessage = (userId, inputValue, event) => {
        event.preventDefault()
        setInputValue('')
        const myOwnMessage = true
        function scrollDown() { dummy.current.scrollIntoView({behavior: 'smooth'})}
        addMessageToUser(userId, inputValue, myOwnMessage, scrollDown)
        replyMessage(userId, scrollDown)
    }
    return (
        <div>
            <div className="messageContainer">

                {messagesData.map((item) => {
                    return <div ref={dummy} key={item.messId} className={classNames('messageBody', {'ownMessage': item.isOwn})}>
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