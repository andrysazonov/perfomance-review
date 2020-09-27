import React from 'react';
import ReactDOM from 'react-dom';
import { CheckBox } from './components/CheckBox';


ReactDOM.render(
  <React.StrictMode>
    <CheckBox color={"#B30064"}>Example text</CheckBox>
  </React.StrictMode>,
  document.getElementById('checkbox')
);

