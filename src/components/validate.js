const validate = values => {

	const errors = {};
	// if (!values.email) {
	// 	errors.email = ' is Required';
	// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
	// 	errors.email = ' is Invalid';
	// }
	// if (!values.password) {
	// 	errors.password = ' is Required'
	// } else if (values.password.length <= 5 ) {
	// 	errors.password = ' should be at least 6 characters'
	// }
	// if (values.password !== values.confirmPassword) {
	// 	errors.confirmPassword = '(Passwords should match)'
	// }

	// ___________________Date______________________
	const d = values.day;
	const m = values.month;
	const y = values.year;
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const age = year - y;
	const monthDiff = month - m;

	function calDays(m,y) {

	    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12)
	    {
	        return 31;              
	    }
	    else if (m === 4 || m === 6 || m === 9 || m === 11)
	    {
	        return 30;        
	    }
	    else
	    {    
	        if ((y % 4 === 0) || (y % 400 === 0 && y % 100 !== 0))
	        {    
	            return 29;          
	        }
	        else 
	        {
	            return 28;              
	        }
	    }    
	}

	if (!values.day && !values.month && !values.year ) {
		errors.date = 'Date of Birth is Required'
	} else if (isNaN(d)) {
		errors.date = 'The day should be a number'
	} else if (isNaN(m)) {
		errors.date = 'The month should be a number'
	} else if (isNaN(y)) {
		errors.date = 'The year should be a number'
	} else if (d > 31 || m > 12 || y > 2017 || y < 1850) {
		errors.date = 'Please indicate a valid date'
	} else if ( (monthDiff < 0 && age < 19) || (monthDiff >= 0 && age < 18)) {
		errors.date = 'Oops! This is 18+ :)'
	} else if ( d > calDays(m,y) ) {
		errors.date = 'Please input a valid date'
	}


	if (!values.sex) {
		errors.sex = 'Gender is Required';
	}


	return errors;
};

export default validate;