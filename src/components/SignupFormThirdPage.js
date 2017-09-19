import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate'
import '../stylesheets/style.css'


const SignupFormThirdPage = props => {
	const { handleSubmit, pristine, submitting } = props;
	return ( 
		<form className="signupForm" onSubmit={handleSubmit}>
			<div>
				<img src="img/tick.png" alt="Done!" className="done"/>
			</div>
			<button className="submit" type="submit" disabled={pristine || submitting}>
				Go To Dashboard &#x2192;
			</button>
		</form>
	)
} 


export default reduxForm({
	form: 'signup', //                 <------ same form name
	destroyOnUnmount: false, //        <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	validate,
})(SignupFormThirdPage);
