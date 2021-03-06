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
import { useState } from "react";
import { ModalWizard } from "../ModalWizard";
import { useImportJavaClassesWizardI18n } from "../../i18n";
import { ImportJavaClassesWizardFirstStepContent } from "../ImportJavaClassesWizardFirstStepContent";

export const ImportJavaClassesWizard: React.FunctionComponent<ImportJavaClassesWizardProps> = ({
  buttonStyle,
  buttonIcon
}: ImportJavaClassesWizardProps) => {

  const { i18n } = useImportJavaClassesWizardI18n();
  const [isSecondStepEnabled, enableSecondStep] = useState(false);
  const [isThirdStepEnabled] = useState(false);
  const handleModalToggle = (value: string) => {
    var toEnable: boolean;
    if (value === "Author" || value === "Book") { toEnable = true; }
    else if (value === "disable") { toEnable = false }
    else { toEnable = false; }
    enableSecondStep(toEnable);
    return toEnable;
  };

  const firstStepComponent = <ImportJavaClassesWizardFirstStepContent
    inputLabel={i18n.modalWizard.firstStep.input.label}
    inputPlaceHolder={i18n.modalWizard.firstStep.input.label}
    inputOnChange={handleModalToggle}
    emptyStateTitle={i18n.modalWizard.firstStep.emptyState.title}
    emptyStateBody={i18n.modalWizard.firstStep.emptyState.body} />

  const steps = [
    { name: i18n.modalWizard.firstStep.stepName, component: firstStepComponent, enableNext: isSecondStepEnabled, canJumpTo: false, hideBackButton: true },
    { name: i18n.modalWizard.secondStep.stepName, component: <p>Step 2 content</p>, enableNext: isThirdStepEnabled, canJumpTo: false },
    { name: i18n.modalWizard.thirdStep.stepName, component: <p>Step 3 content</p>, enableNext: false, canJumpTo: false, nextButtonText: i18n.modalWizard.thirdStep.nextButtonText }
  ];

  return <ModalWizard
    buttonIcon={buttonIcon}
    buttonStyle={buttonStyle}
    buttonText={i18n.modalButton.text}
    wizardTitle={i18n.modalWizard.title}
    wizardDescription={i18n.modalWizard.description}
    wizardSteps={steps} />
}

export interface ImportJavaClassesWizardProps {
  buttonStyle: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control';

  buttonIcon?: React.ReactNode;
}
