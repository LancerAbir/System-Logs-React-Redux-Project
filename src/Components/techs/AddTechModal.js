import React, { useState } from 'react';

/** 
 *! addTechs() function come from actions/logActions.js file
 **/
import { addTechs } from '../../actions/techActions';

/** 
 *!  Component এর সাথে Redux এর connect করার জন্য 
 **  { connect } redux এর একটি built in function
**/
import { connect } from 'react-redux';

/** 
 *! Data validation এর জন্য
 **/
import PropTypes from 'prop-types';

/** 
 *! Materialize JS file include 
 **/
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTechs }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            /** 
             *! Include function from Materialize JS file -> M.toast();
            **/
            M.toast({ html: 'Please enter a First and Last Name' })
        } else {
            addTechs({
                firstName,
                lastName
            })
            /** 
             *! Include function from Materialize JS file -> M.toast();
            **/
            M.toast({ html: `Great Man New ${firstName} ${lastName} Technician Has Successfully Add` })

            // Clear Fields
            setFirstName("");
            setLastName("");
        }
    }

    return (
        // id='add-tech-modal' come from --> AddBtn.js --> href="#add-tech-modal"
        <div id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>Add New Technician</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="firstName" className="active"> First Name </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className="active"> Last Name </label>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue waves-light btn"> Enter </a>
            </div>
        </div>
    );
};

/** 
 **  Data validation check এর জন্য
 **/
AddTechModal.propTypes = {
    addTechs: PropTypes.func.isRequired
}


export default connect(null, { addTechs })(AddTechModal);