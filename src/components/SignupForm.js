import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SignupFormFirstPage from './SignupFormFirstPage'
import SignupFormSecondPage from './SignupFormSecondPage'
import SignupFormThirdPage from './SignupFormThirdPage'
import Progress from 'react-progressbar'
import '../stylesheets/style.css'

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this)
		this.state = {
			page: 1,
		}
	}
	nextPage() {
		this.setState({ page: this.state.page + 1 });
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}

	render() {
		const { onSubmit } = this.props;
		const { page } = this.state;
		const progressAmount = 100/3*page;

		return (
			
			<div className="theForm">
				{page === 1 && 
					<div>
						<h1 className="heading">Signup</h1>
						<Progress completed={progressAmount} className="progressBar" />
						<SignupFormFirstPage 
							onSubmit={this.nextPage} 
						/>
					</div>}
				{page === 2 && 
					<div>
						<h1 className="heading">Signup</h1>
						<Progress completed={progressAmount} className="progressBar" />
						<SignupFormSecondPage
							previousPage={this.previousPage}
							onSubmit={this.nextPage}
						/> 
					</div>}
				{page === 3 && 
					<div>
						<h1 className="heading">Thank You!</h1>
						<Progress completed={progressAmount} className="progressBar" />
						<SignupFormThirdPage
							previousPage={this.previousPage}
							onSubmit={onSubmit}
						/>
					</div>}
			</div>
		)
	}
}

SignupForm.PropTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default SignupForm;