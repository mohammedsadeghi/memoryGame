import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {reduxStorage} from './storage';

// Slices
import tasksSlice from './tasksSlice';
import userSlice from './userSlice';
import dummyNetwokSlice from './dummyNetwork';
import timerSlice from './timeSlice';

const rootReducer = combineReducers({
  difficulty: tasksSlice,
  user: userSlice,
  dummyNetwork: dummyNetwokSlice,
  timeSlice: timerSlice,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
