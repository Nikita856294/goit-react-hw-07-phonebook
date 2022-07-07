import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import phonebookReducer from '../phonebook/phonebook-reducer';

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
        ignoreState: true,
      },
    }),
    logger,
  ],
});

// let persistor = persistStore(store);

export { store };
