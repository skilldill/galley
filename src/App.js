import 'antd/dist/antd.css';

import React from 'react';
import { Provider } from "react-redux";

import { store } from "./store";
import { RouterRoulet } from "./routing"

export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterRoulet />
      </Provider>
    </div>
  );
}
