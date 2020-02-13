import React, { useEffect } from 'react';
import TechItem from './TechItem';

/** 
 *! getTechs() function come from actions/logActions.js file
 **/
import { getTechs } from '../../actions/techActions';

/** 
 *!  Component এর সাথে Redux এর connect করার জন্য 
 **  { connect } redux এর একটি built in function
**/
import { connect } from 'react-redux';

/** 
 *! Data validation এর জন্য
 **/
import PropTypes from 'prop-types';


const TechListModel = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4> Technician List</h4>
                <ul className="collection">
                    {!loading && techs !== null && techs.map(tech => (
                        <TechItem tech={tech} key={tech.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};


/** 
 **  Data validation check এর জন্য
 **/
TechListModel.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

/** 
 **  এই একটি built in function
 **  এই function টা একটি object return করবে
 **  store -> (index.js) যে data আছে এই component এর props হিসেবে pass করবে
**/
const mapStateToProps = (state) => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModel);