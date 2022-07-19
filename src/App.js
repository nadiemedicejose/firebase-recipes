import { useState } from 'react';
import FirebaseFirestoreService from './FirebaseFirestoreService';
import FirebaseAuthService from './FirebaseAuthService';
import LoginForm from './components/LoginForm';
import AddEditRecipeForm from './components/AddEditRecipeForm';

import './App.css';

export const App = () => {
	const [user, setUser] = useState(null);

	FirebaseAuthService.subscribeToAuthChanges(setUser);

	async function handleAddRecipe(newRecipe) {
		try {
			const response = await FirebaseFirestoreService.createDocument('recipes', newRecipe);

			// todo: fetch new recipes from firestore

			alert(`Successfully created a recipe with an Id = ${response.id}`);

		} catch (e) {
			alert(e.message);
		}
	}

	return (
		<div className="App">
			<div className="title-row">
				<h1 className="title">Firebase Recipes</h1>
				<LoginForm existingUser={user}/>
			</div>
		</div>
	);
};
