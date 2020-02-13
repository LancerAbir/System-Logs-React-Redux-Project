import React, { useEffect } from 'react';

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

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        !loading && techs !== null && techs.map(t =>
            <option key={t.id} value={`${t.firstName} ${t.lastName}`}> {t.firstName} {t.lastName} </option>
        )
    );
};

/** 
 **  Data validation check এর জন্য
 **/
TechSelectOptions.propTypes = {
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


export default connect(mapStateToProps, { getTechs })(TechSelectOptions);