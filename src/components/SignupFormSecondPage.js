import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate' 
import renderFields from './renderFields'
import '../stylesheets/style.css'

const sources = ['Facebook', 'Linkedin', 'From a friend', 'During an event', 'In an article']

const renderSources = ({ input, meta: { touched, error} }) => (
	<div>
		<select {...input}>
			<option value=""></option>
			{sources.map(val => <option value={val} key={val}>{val}</option>)}
		</select>
		{touched && error && <span>{error}</span>}
	</div>
)


const SignupFormSecondPage = props => {
	const { handleSubmit, previousPage } = props;
	return ( 
		<form className="signupForm secondPage" onSubmit={handleSubmit}>
			

			<label htmlFor="date" className="dateLabel"> Date of Birth </label>
				
				<Field 
					name="date"
					component={renderFields}
					placeholder=""
					className="dateError"
				/> 

			<div className="date" id="date">
				<div className="inputDate">
					<Field 
						name="day"
						type="number"
						component={renderFields}
						placeholder="DD"
					/>
				</div>
				
				<div className="inputDate">
					<Field 
						name="month"
						type="number"
						component={renderFields}
						placeholder="MM"
					/>
				</div>

				<div className="inputDate">
					<Field 
						name="year"
						type="number"
						component={renderFields}
						placeholder="YYYY"
					/>
				</div>
			</div>

			<div className="gender">

				<label htmlFor="sex">Gender</label>
				
					<Field 
						name="sex"
						component={renderFields}
						placeholder=""
						className="dateError"
					/>
				<div className="radioFields">
					<Field 
						name="sex" 
						component="input" 
						type="radio" 
						value="male" 
						id="male"
					/>
					<label htmlFor="male">Male </label>
					<Field 
						name="sex" 
						component="input" 
						type="radio" 
						value="female" 
						id="female"
					/>
					<label htmlFor="female">Female</label>
					<Field 
						name="sex" 
						component="input" 
						type="radio" 
						value="unspecified" 
						id="unspecified"
					/>
					<label htmlFor="unspecified">Unspecified</label>

				</div>
			</div>
			<div>
				<label className="sourceLabel" htmlFor="source">Where did you hear about us?</label>
				<Field name="source" component={renderSources} type="select"/>
			</div>
			<div className="buttonPart">
				<button type="button" className="previous" onClick={previousPage}>
					Back
				</button>
				<button type="submit" className="next">
					Next &#x2192;
				</button>
			</div>
		</form>
	)
}

export default reduxForm({
	form: 'signup', //                 <------ same form name
	destroyOnUnmount: false, //        <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
	validate,
})(SignupFormSecondPage)











