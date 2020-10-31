import React, {Component} from "react";
import {connect} from "react-redux";
import Contacts from "./contacts";
import {compose} from "redux";
import {withRouter} from "react-router";
import {ReRenderUsersList} from "../../redux/actions";

class ContactsContainer extends Component {



    render() {
        const {contactsList, OnDialogSet, ReRenderUsersList} = this.props
        ReRenderUsersList()
        return <Contacts contactsList={contactsList}  OnDialogSet={OnDialogSet}/>
    }
}

const mapStateToProps = (state) => ({
    contactsList: state.Reducer.users
})

const mapDispatchToProps = {
    ReRenderUsersList
}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ContactsContainer)
