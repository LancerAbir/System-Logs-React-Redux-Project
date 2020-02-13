import React from 'react';
/** 
 *! deleteTechs() function come from actions/logActions.js file
 **/
import { deleteTechs } from '../../actions/techActions';

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

const TechItem = ({ tech: { id, firstName, lastName }, deleteTechs }) => {
    const onDelete = () => {
        deleteTechs(id)
        /** 
             *! Include function from Materialize JS file -> M.toast();
            **/
        M.toast({ html: `Wow Technician ${id} Has Successfully Delete` })
    }

    return (
        <li className="collection-item">
            <dev>
                {firstName} {lastName}
                <a href="#!" onClick={onDelete} className="secondary-content">
                    <i className="material-icons gray-text">delete</i>
                </a>
            </dev>
        </li>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTechs: PropTypes.func.isRequired
}

export default connect(null, { deleteTechs })(TechItem);