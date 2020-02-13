import React, { useEffect } from 'react';
import LogItem from './LogItem';

/** 
 *! getLogs() function come from actions/logActions.js file
 **/
import { getLogs } from '../../actions/logActions';

/** 
 *! Materialize CSS er Loading icon
 **/
import Preloader from '../layout/Preloader';

/** 
 *!  Component এর সাথে Redux এর connect করার জন্য 
 **  { connect } redux এর একটি built in function
**/
import { connect } from 'react-redux';

/** 
 *! Data validation এর জন্য
 **/
import PropTypes from 'prop-types';


const Logs = ({ getLogs, log: { logs, loading } }) => {

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);


    if (loading || logs === null) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs </h4>
            </li>
            {!loading && logs.length === 0 ? (
                <p className="center"> no logs to show... </p>
            ) : (
                    logs.map(log => <LogItem log={log} key={log.id} />)
                )}
        </ul>
    );
};

/** 
 **  Data validation check এর জন্য
 **/
Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired
}

/** 
 **  এই একটি built in function
 **  এই function টা একটি object return করবে
 **  store -> (index.js) যে data আছে এই component এর props হিসেবে pass করবে
**/
const mapStateToProps = (state) => ({
    log: state.log
})

//connect() এই function টা call হওয়ার পরে component return করবে যার child/argument হল Logs
export default connect(mapStateToProps, { getLogs })(Logs);