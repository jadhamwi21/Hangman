import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { GameReducer } from "../slices/game";
import { PlayerReducer } from "../slices/player";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const playerPersistConfig = {
	key: "player",
	storage,
};

const gamePersistConfig = {
	key: "root",
	storage,
	blacklist: ["words"],
};

const rootReducer = combineReducers({
	Player: persistReducer(playerPersistConfig, PlayerReducer),
	Game: persistReducer(gamePersistConfig, GameReducer),
});

export const store = configureStore({
	reducer: rootReducer,
});

export const persistedStore = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
