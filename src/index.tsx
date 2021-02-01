import React from 'react';
import ReactDOM from 'react-dom';
import SimpleForm from './SimpleForm';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
