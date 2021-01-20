import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import 'semantic-ui-css/semantic.min.css';
import { initMiddleware } from 'devise-axios';
import PetProvider from './providers/PetProvider';
import InsuranceProvider from './providers/InsuranceProvider';

import NoteProvider from './providers/NoteProvider';

initMiddleware();

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<PetProvider>
				<InsuranceProvider>
					<NoteProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</NoteProvider>
				</InsuranceProvider>
			</PetProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
