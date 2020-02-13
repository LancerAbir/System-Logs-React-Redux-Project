import React from 'react';

/** 
 *! deleteLogs() function come from actions/logActions.js file
 **/
import { deleteLogs, setCurrent } from '../../actions/logActions';

/** 
 *!  Component এর সাথে Redux এর connect করার জন্য 
 **  { connect } redux এর একটি built in function
**/
import { connect } from 'react-redux';

/** 
 *! Moment date and time format এর জন্য
 **/
import Moment from 'react-moment';

/** 
 *! Data validation এর জন্য
 **/
import PropTypes from 'prop-types';

/** 
 *! Materialize JS file include 
 **/
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLogs, setCurrent }) => {

    const onDelete = () => {
        deleteLogs(log.id)
        /** 
         *! Include function from Materialize JS file -> M.toast();
        **/
        M.toast({ html: 'Yes Your Log Has Successfully Delete' })
    }

    const onCurrent = () => {
        setCurrent(log)
        /** 
         *! Include function from Materialize JS file -> M.toast();
        **/
        M.toast({ html: 'Yes Your Log Has Successfully setCurrent' })
    }

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" onClick={onCurrent} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}> {log.message} </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">
                        ID #{log.id}
                    </span>
                    {''} last updated by {''}
                    <span className="black-text">
                        {log.tech}
                    </span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment> {/** Moment date and time format */}
                    <a href="#!" onClick={onDelete} className="secondary-content">
                        <i className="material-icons gray-text">delete</i>
                    </a>
                </span>
            </div>
        </li>
    );
};

/** 
 **  Data validation check এর জন্য
 **/
LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLogs: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, { deleteLogs, setCurrent })(LogItem);