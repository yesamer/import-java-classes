/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { ModalWizard } from "../ModalWizard";

export const ImportJavaClassesWizard: React.FunctionComponent<ImportJavaClassesWizardProps> = ({
  buttonText,
}: ImportJavaClassesWizardProps) => {

  const steps = [
    { name: 'Select Java classes', component: <p>Step 1 content</p> },
    { name: 'Cherry-pick fields', component: <p>Step 2 content</p> },
    { name: 'Review', component: <p>Step 3 content</p>, nextButtonText: 'Import' }
  ];

  return <ModalWizard
    buttonStyle="secondary"
    buttonText="Import Java classes"
    wizardTitle="Import Java classes"
    wizardDescription="It converts your java assets to DMN type. This is a one-time import action: if the Java class get updated, you will need to reimport it"
    wizardSteps={steps} />
}

export interface ImportJavaClassesWizardProps {
  buttonText: string;
}
