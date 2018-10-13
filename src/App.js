import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import GithubReducer from './reducers/GithubReducer';
import ReduxThunk from 'redux-thunk';
import { Header, Input } from './components/common';
import SubmitForm from './components/SubmitForm';

const App = () => {
  const store = createStore(GithubReducer, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Header headerText="Project Buddy" />
        <SubmitForm />

      </View>
    </Provider>
  );
};

export default App;
