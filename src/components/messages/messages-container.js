import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import {compose} from "redux";
import Messages from "./messages";
import "./messages.scss"
import {addMessageToUser, replyMessage} from "../../redux/actions";
import {auth, SignOut} from "../login/login";

class MessagesContainer extends Component {
    scrollToBottom = () => {
        return this.dummy.current.scrollIntoView({behavior: "smooth"});
    }
    dummy = React.createRef()

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }


    render() {
        const {users, match: {params: {userId}}, addMessageToUser, replyMessage} = this.props
        console.log(this.props)
        return (
            <div>
                <button onClick={()=>SignOut()} className="exitButton">Sign out</button>
                {
                    users.map((user) => {
                        if (user.id === Number(userId)) {
                            return (
                                <Messages addMessageToUser={addMessageToUser} dummy={this.dummy} userId={userId}
                                          replyMessage={replyMessage} messagesData={user.messagesData}/>
                            )

                        }
                    })
                }
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    users: state.Reducer.users
})

const mapDispatchToProps = {
    replyMessage,
    addMessageToUser,
    auth,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer)
