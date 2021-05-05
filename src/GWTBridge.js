// import React and ReactDom that will inject
// our div created in the GWT Widget to our React component
import React from 'react';
import ReactDOM from 'react-dom';

// ImportJavaClassesWizard React component
import { ImportJavaClassesWizard } from "./components/ImportJavaClassesWizard";
import { I18nDictionariesProvider } from "@kogito-tooling/i18n/dist/react-components";
import {
  importJavaClassesWizardI18nDictionaries,
  ImportJavaClassesWizardI18nContext,
  importJavaClassesWizardI18nDefaults,
} from "./i18n";


// An IIFE (Immediately Invoked Function Expression) 
// Will runs as soon as it is defined.
// the global object passed as argument is the global window object 
(function(global) {
  
  // Render a ImportJavaClassesWizard inside parentDiv
  const renderImportJavaClassesWizard = (parentDiv) => {
    
    // We pass down the props from GWT Widget.
    // The only funny looking props is the onClick callback.
    // This callback is triggered from inside the Circle component
    // We inject the parentDiv (that listens to the event defined in our GWT Widget) 
    // to the function because we will need it to dispatch the event back.
    const myModalButton = (
      <I18nDictionariesProvider
      defaults={importJavaClassesWizardI18nDefaults}
      dictionaries={importJavaClassesWizardI18nDictionaries}
      initialLocale={navigator.language}
      ctx={ImportJavaClassesWizardI18nContext}
    >
      <ImportJavaClassesWizard buttonText="Import Java classes" />
    </I18nDictionariesProvider>
    );

    // Classic ReactDOM render that renders a React component inside a element.
    ReactDOM.render(myModalButton, parentDiv);
  };

  // When the GWT Widget will unload we will call
  // this method that will unmount the react component
  const unmountReactComponent = element => {
    ReactDOM.unmountComponentAtNode(element);
  };

  // global api object that the GWT Widget will have access to
  const ShapeViewer = {
    renderImportJavaClassesWizard,
    unmountReactComponent
  };

  // $wnd.ShapeViewer from the GWT Widget
  global.ShapeViewer = ShapeViewer;
})(window);