import React, { Component } from 'react';
import Contact from './Contact';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import { getContacts } from "../../Actions/contactActions";
class Contacts extends Component {
 componentDidMount(){
   const{id} =this.props.match.params;
   this.props.getContacts(id);
 }
  render() {
    
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-primary">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
Contacts.propType={
  contacts:PropTypes.array.isRequired,
  getContacts:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({
  contacts:state.contact.contacts
});

// const mapDispatchToProps=(dispatch)=>({
//   getContacts:()=>dispatch({type:GET_CONTACTS})
// });
export default connect( mapStateToProps,{getContacts})(Contacts);
