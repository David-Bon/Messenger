import React, {Component} from "react";
import {connect} from "react-redux";
import Contacts from "./contacts";
import {compose} from "redux";
import {withRouter} from "react-router";

class ContactsContainer extends Component {



    render() {
        const {contactsList, OnDialogSet} = this.props
        return <Contacts contactsList={contactsList}  OnDialogSet={OnDialogSet}/>
    }
}

const mapStateToProps = (state) => ({
    contactsList: state.Reducer.users
})

const mapDispatchToProps = {

}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ContactsContainer)
