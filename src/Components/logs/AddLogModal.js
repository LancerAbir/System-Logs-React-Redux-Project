import React, { useState } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';

/** 
 *! addLogs() function come from actions/logActions.js file
 **/
import { addLogs } from '../../actions/logActions';

/** 
 *! Data validation এর জন্য
 **/
import PropTypes from 'prop-types';

/** 
 *!  Component এর সাথে Redux এর connect করার জন্য 
 **  { connect } redux এর একটি built in function
**/
import { connect } from 'react-redux';

/** 
 *! Materialize JS file include 
 **/
import M from 'materialize-css/dist/js/materialize.min.js';


const AddLogModal = ({ addLogs }) => {

    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = () => {
        if (message === '' || tech === '') {
            /** 
             *! Include function from Materialize JS file -> M.toast();
            **/
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            };

            addLogs(newLog);

            /** 
             *! Include function from Materialize JS file -> M.toast();
            **/
            M.toast({ html: `Log added by ${tech}` })

            // Clear Fields
            setMessage("");
            setTech("");
            setAttention(false);
        }
    }

    return (
        <div id='add-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active"> Log Message </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" className="browser-default" value={tech} onChange={e => setTech(e.target.value)}>
                            <option value="" disabled> Select Technician </option>
                            <TechSelectOptions />

                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label htmlFor="">
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                                <span> Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue waves-light btn"> Enter </a>
            </div>
        </div>
    );
};

const modalStyle = {
    width: '75%',
    height: '75%'
}

/** 
 **  Data validation check এর জন্য
 **/
AddLogModal.propTypes = {
    addLogs: PropTypes.func.isRequired
}

export default connect(null, { addLogs })(AddLogModal);