import React, {Component} from "react";
import {connect} from "react-redux";
import Contacts from "./contacts";
import {compose} from "redux";
import {withRouter} from "react-router";
import {setUserProps} from "../../redux/actions";
import {SignOut} from "../../App";

class ContactsContainer extends Component {

    reDirectToLoginPage = () => {
        SignOut()
        this.props.history.push("/")
    }

    render() {
        const {contactsList, setUserProps} = this.props
        return <Contacts contactsList={contactsList} reDirectToLoginPage={this.reDirectToLoginPage} setUserProps={setUserProps}/>
    }
}

const mapStateToProps = (state) => ({
     contactsList: state.Reducer.users
})

const mapDispatchToProps = {
    setUserProps
}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ContactsContainer)
