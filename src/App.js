import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Component from './component/component';
import Theme from './theme/theme';
import { store, persistor } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <Component />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
