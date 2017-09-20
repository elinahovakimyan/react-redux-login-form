import React from 'react'

const renderFields = ({ input, label, placeholder, id, className, type, meta: { touched, error } }) => (
	<div className="threePartInputs">
		<label>{label} {touched && error && <span className="secondPageError"> {error} </span> } </label>
		<input {...input} type={type} placeholder={placeholder} id={id} className={className}/>
	</div>
);



export default renderFields;
