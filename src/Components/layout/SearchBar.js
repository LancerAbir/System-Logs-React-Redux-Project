import React, { useRef } from 'react';

/** 
 *! searchLogs() function come from actions/logActions.js file
 **/
import { searchLogs } from '../../actions/logActions';

/** 
 *!  Component এর সাথে Redux এর connect করার জন্য 
 **  { connect } redux এর একটি built in function
**/
import { connect } from 'react-redux';

/** 
 *! Data validation এর জন্য
 **/
import PropTypes from 'prop-types';

const SearchBar = ({ searchLogs }) => {

    const ref = useRef('')

    const onChange = (event) => {
        searchLogs(ref.current.value);
    }

    return (
        <div>
            <nav style={{ marginBottom: '30px' }} className="blue" >
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" placeholder='Search Logs...' ref={ref} onChange={onChange} />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
};


/** 
 **  Data validation check এর জন্য
 **/
SearchBar.propTypes = {
    log: PropTypes.object.isRequired,
    searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(SearchBar);