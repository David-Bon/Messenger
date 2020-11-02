import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import Messages from "./messages";
import "./messages.scss"
import {addMessageToUser, replyMessage, setUserProps} from "../../redux/actions";
import {SignOut} from "../../App";

class MessagesContainer extends Component {
    scrollToBottom = () => {
        return this.scrollDownRef.current.scrollIntoView({behavior: "smooth"});
    }
    scrollDownRef = React.createRef()

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const {users, match: {params: {userId}}, addMessageToUser, replyMessage, setUserProps} = this.props
        console.log(this.props)
        return (
            <div>
                {
                    users.map((user) => {
                        if (user.id === Number(userId)) {
                            const {messagesData} = user;
                            return (
                                <Messages
                                    addMessageToUser={addMessageToUser}
                                    scrollDownRef={this.scrollDownRef}
                                    userId={userId}
                                    replyMessage={replyMessage}
                                    messagesData={messagesData}
                                    setUserProps={setUserProps}
                                />
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
    setUserProps,
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(MessagesContainer)
