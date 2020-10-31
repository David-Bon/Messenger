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
                    const lastDate = lastUserProps('messDate');
                    const cropUserDate = lastDate.length < 13 ? lastDate : `${lastDate.substr(0, 13)}`
                    const cropUserMessages = lastMessage.length < 25 ? lastMessage : `${lastMessage.substr(0, 35)}..`;
                    return <NavLink className="td" to={`/users/${id}`}>

                            <div className="Contacts" key={id}>
                                <div>
                                    <img src={image} alt="not found" className="ProfilePic"/>
                                </div>
                                <div className="UserInfo">
                                    <span className="UserName">{name}</span>
                                    <span className="LastMessage">{cropUserMessages}</span>
                                    <span className="MessageDate">{cropUserDate}</span>
                                </div>
                            </div>

                    </NavLink>
                })
            }
        </div>
    )
}

export default UsersRender
