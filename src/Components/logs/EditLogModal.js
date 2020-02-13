import React, { useState, useEffect } from 'react';
/** 
 *! updateLogs() function come from actions/logActions.js file
 **/
import { updateLogs } from '../../actions/logActions';

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

const EditLogModal = ({ current, updateLogs }) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]) // [current] -> is dependency 

    const onSubmit = () => {
        if (message === '' || tech === '') {
            /** 
             *! Include function from Materialize JS file -> M.toast();
            **/
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }
            updateLogs(updLog)
            /** 
             *! Include function from Materialize JS file -> M.toast();
            **/
            M.toast({ html: `Log Updated by ${tech}` })

            // Clear Fields
            setMessage("");
            setTech("");
            setAttention(false);
        }
    }

    return (
        <div id='edit-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" className="browser-default" value={tech} onChange={e => setTech(e.target.value)}>
                            <option value="" disabled> Select Technician </option>
                            <option value="Md Rony"> Md Rony </option>
                            <option value="Md Najmul"> Md Najmul </option>
                            <option value="Md Robiul"> Md Robiul </option>
                            <option value="Md Arif"> Md Arif </option>
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
EditLogModal.propTypes = {
    updateLogs: PropTypes.func.isRequired,
    current: PropTypes.object
}


/** 
 **  এই একটি built in function
 **  এই function টা একটি object return করবে
 **  store -> (index.js) যে data আছে এই component এর props হিসেবে pass করবে
**/
const mapStateToProps = (state) => ({
    current: state.log.current
})

export default connect(mapStateToProps, { updateLogs })(EditLogModal);