import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { Route, Routes } from "react-router";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import Game from "./containers/Game";
import Scores from "./containers/Scores";
import { useWordsLoader } from "./hooks/useWordsLoader";

function App() {
	const WordsLoading = useWordsLoader();

	return WordsLoading ? (
		<LoadingIndicator />
	) : (
		<Routes>
			{WordsLoading ? (
				<Route path="*" element={<div>Loading...</div>} />
			) : (
				<>
					<Route path="/" element={<Game />} />
					<Route path="/scores" element={<Scores />} />
					<Route path="*" element={<Navigate to="/" />} />
				</>
			)}
		</Routes>
	);
}

export default App;
