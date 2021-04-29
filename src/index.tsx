import "@patternfly/react-core/dist/styles/base.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { I18nDictionariesProvider } from "@kogito-tooling/i18n/dist/react-components";
import {
  importJavaClassesWizardI18nDictionaries,
  ImportJavaClassesWizardI18nContext,
  importJavaClassesWizardI18nDefaults,
} from "./i18n";
import { ImportJavaClassesWizard } from "./components/ImportJavaClassesWizard";

function ImportJavaClasses() {
  return (
    <I18nDictionariesProvider
      defaults={importJavaClassesWizardI18nDefaults}
      dictionaries={importJavaClassesWizardI18nDictionaries}
      initialLocale={navigator.language}
      ctx={ImportJavaClassesWizardI18nContext}
    >
      <ImportJavaClassesWizard buttonText="Import Java classes" />
    </I18nDictionariesProvider>
  )  
}

ReactDOM.render(
  <ImportJavaClasses />,
  document.getElementById('root')
);