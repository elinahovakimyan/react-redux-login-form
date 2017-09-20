import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import showResults from './components/showResults'
import SignupForm from './components/SignupForm'

const rootEl = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<div className="theForm">
			<SignupForm onSubmit={showResults} />
		</div>
	</Provider>,
	rootEl
);