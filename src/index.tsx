import "@patternfly/react-core/dist/styles/base.css";
import "@patternfly/react-core/dist/styles/base.css";
import React from 'react';
import { Button } from '@patternfly/react-core';
import ImportIcon from '@patternfly/react-icons/dist/js/icons/import-icon';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <Button variant="secondary" icon = {<ImportIcon />}>Import Java classes</Button>
  </React.Fragment>,
  document.getElementById('root')
);
