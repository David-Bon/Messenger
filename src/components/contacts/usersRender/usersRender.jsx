import {NavLink} from "react-router-dom";
import "./usersRender.scss"

const UsersRender = (renderProp) => {
    return (
        <div className="mainContacts">
            {
                renderProp.map((user) => {
                    const {id, image, name, messagesData} = user;
                    const lastUserProps = (property) => {
                        const lastMessageIdx = messagesData.length - 1;
                        return messagesData[lastMessageIdx][`${property}`]
                    }
                    const lastMessage = lastUserProps('messValue');
                    const cropUserMessages = lastMessage.length < 25 ? lastMessage : `${lastMessage.substr(0, 25)}...`;
                    return <NavLink to={`/users/${id}`}>
                        <div key={id} onClick={() => {
                        }}>
                            <div className="Contacts">
                                <div className="UserPhoto">
                                    <img src={image} alt="not found" className="ProfilePic"/>
                                </div>
                                <div>
                                    <span className="UserName">{name}</span>
                                    <span className="LastMessage">{cropUserMessages}</span>
                                    <span className="MessageDate">{lastUserProps('messDate')}</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                })
            }
        </div>
    )
}

export default UsersRender
