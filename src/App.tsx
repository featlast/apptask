import React from 'react';
import {Provider} from 'react-redux';
import ContainerNavigation from './routes/ContainerNavigation';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <ContainerNavigation />
    </Provider>
  );
}
