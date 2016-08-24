import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { filterMeetups } from '../actions';

const mapDispatchToProps = dispatch => ({
	onFilter: query => dispatch(filterMeetups(query))
});

const Navbar = ({ onFilter }) => {
	return (<nav className='navbar navbar-default'>
	  <div className='container'>
	    <Link to='/new' className='btn btn-default navbar-btn'> ✚ New Meetup </Link>
	    <form className='navbar-form navbar-right' role='search'>
			  <div className='form-group'>
			    <input onChange={e => onFilter(e.target.value)} type='search' className='form-control' placeholder='Search' />
			  </div>
			</form>
	  </div>
	</nav>);
};

export default connect(null, mapDispatchToProps)(Navbar);