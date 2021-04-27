import "@patternfly/react-core/dist/styles/base.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ImportJavaClassesWizard } from "./components/ImportJavaClassesWizard";

ReactDOM.render(
  <ImportJavaClassesWizard buttonText="Import Java classes" />,
  document.getElementById('root')
);