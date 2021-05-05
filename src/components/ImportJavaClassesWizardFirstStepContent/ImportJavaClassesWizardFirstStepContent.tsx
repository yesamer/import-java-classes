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
import {
    InputGroup,
    TextInput,
    EmptyState,
    EmptyStateIcon,
    EmptyStateBody,
    Title
} from '@patternfly/react-core';
import CubesIcon from '@patternfly/react-icons/dist/js/icons/cubes-icon';

export const ImportJavaClassesWizardFirstStepContent: React.FunctionComponent<ImportJavaClassesWizardFirstStepContentProps> = ({
    inputLabel,
    inputPlaceHolder,
    inputOnChange,
    emptyStateTitle,
    emptyStateBody
}: ImportJavaClassesWizardFirstStepContentProps) => {

    return < >
        <InputGroup label={inputLabel}>
            <TextInput
                label={inputLabel}
                name="textInput11"
                id="textInput11"
                type="search"
                aria-label="search input example"
                placeholder={inputPlaceHolder}
                onChange={inputOnChange} />
        </InputGroup>
        <EmptyState>
            <EmptyStateIcon icon={CubesIcon} />
            <Title headingLevel="h4" size="lg">
                {emptyStateTitle}
            </Title>
            <EmptyStateBody>
                {emptyStateBody}
            </EmptyStateBody>
        </EmptyState>
    </>
}

export interface ImportJavaClassesWizardFirstStepContentProps {
    inputLabel: string;
    inputPlaceHolder: string;
    inputOnChange: (value: string, event: React.FormEvent<HTMLInputElement>) => void;
    emptyStateTitle: string;
    emptyStateBody: string;
}
