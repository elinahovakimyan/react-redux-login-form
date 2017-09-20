import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import '../stylesheets/style.css'

const SignupFormFirstPage = props => {
	const { handleSubmit } = props

	return (
		<div>
			<form className="signupForm firstPage" onSubmit={handleSubmit}>
				<Field 
					name="email" 
					type="email" 
					component={renderField} 
					label="Email" 
				/>
				<Field 
					name="password"
					type="password"
					component={renderField}
					label="Password"
				/>
				<Field 
					name="confirmPassword"
					type="password"
					component={renderField}
					label="Confirm Password"
				/>
				<div className="buttonPart">
					<button type="submit" className="next">Next &#x2192;</button>
				</div>
			</form>
		</div>
	)
}

export default reduxForm({
	form: 'signup', //							<------ same form name
	destroyOnUnmount: false, //					<------ preserve form data
	forceUnregisterOnUnmount: true, //			<------ unregister fields on unmount
	validate,
})(SignupFormFirstPage);