import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import Messages, {scrollDown} from "./messages";
import {Link} from "react-router-dom";
import "./messages-module.scss"
import {addMessageToUser, replyMessage} from "../../redux/actions";

class MessagesContainer extends Component {
    // scrollToBottom = () => {
    //     return  this.crr.current.scrollIntoView({ behavior: "smooth" });
    // }
    //

    //
    // componentDidUpdate() {
    //     this.scrollToBottom();
    // }


    render() {
        const {users, match: {params: {userId}}, addMessageToUser, replyMessage} = this.props
        return (
            <div>
                <button className="exitButton">
                    <Link to={"/login"}>Exit</Link>
                </button>
                {
                    users.map((user) => {
                        if (user.id === Number(userId)) {
                            return (
                                <Messages addMessageToUser={addMessageToUser} userId={userId}
                                          replyMessage={replyMessage}
                                          messagesData={user.messagesData}/>
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
    addMessageToUser
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer)
