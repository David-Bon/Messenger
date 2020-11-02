import React from "react";
import {NavLink} from "react-router-dom";
import "./usersRender.scss"
import moment from 'moment';
import classNames from 'classnames'
const UsersRender = (renderProp) => {

    const userTimeSort = (users) => {
        users.sort((a, b) => {
            return  b.lastMessageTime - a.lastMessageTime
        })
    }

    userTimeSort(renderProp)
    return (

        <div className="mainContacts">
            {
                renderProp.map((user) => {
                    const {id, image, name, messagesData, newMessageNotification} = user;
                    const lastUserProps = (property) => {
                        const lastMessageIdx = messagesData.length - 1;
                        return messagesData[lastMessageIdx][`${property}`]
                    }
                    const lastMessage = lastUserProps('messValue');
                    const lastDate = moment(lastUserProps('messDate')).format('DD MMM HH:mm');
                    const cropUserMessages = lastMessage.length < 25 ? lastMessage : `${lastMessage.substr(0, 35)}..`;
                    return (
                        <NavLink className="td" to={`/users/${id}`}>
                            <div className="Contacts" key={id}>
                                <div>
                                    <img src={image} alt="not found" className="ProfilePic"/>
                                </div>
                                <div className="UserInfo">
                                    <span className="UserName">{name}</span>
                                    <span className="LastMessage">{cropUserMessages}</span>
                                    <span className="MessageDate">{lastDate}</span>
                                    <span className={classNames('viewMessageCount',{"displayMessageCount" : !newMessageNotification})}> </span>
                                </div>
                            </div>
                        </NavLink>
                        )
                })
            }
        </div>
    )
}

export default UsersRender
