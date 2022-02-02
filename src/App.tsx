import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Game from "./containers/Game";
import { useWordsLoader } from "./hooks/useWordsLoader";

function App() {
	const wordsLoading = useWordsLoader();
	return (
		<Routes>
			{wordsLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<Route path="/" element={<Game />} />
					<Route path="/scores">{/* Scores */}</Route>
				</>
			)}
		</Routes>
	);
}

export default App;
