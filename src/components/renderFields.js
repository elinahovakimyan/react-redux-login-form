import React from 'react'

const renderField = ({ input, label, placeholder, id, className, type, meta: { touched, error } }) => (
	<div>
		<label>{label} {touched && error && <span className="secondPageError"> {error} </span> } </label>
		<input {...input} type={type} placeholder={placeholder} id={id} className={className}/>
			
	</div>
);



export default renderField;
