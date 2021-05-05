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
import {
    DataList,
    DataListItem,
    DataListItemRow,
    DataListCheck,
    DataListCell,
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

    const [showEmptyState, setShowEmptySpace] = useState(true);
    const [valueClass, setValueClass] = useState("");
    const onChange = (value: string) => {
        const state = !inputOnChange(value);
        setShowEmptySpace(state)
        setValueClass(value);
    }

    return < >
        <InputGroup label={inputLabel}>
            <TextInput
                label={inputLabel}
                name="textInput11"
                id="textInput11"
                type="search"
                aria-label="search input example"
                placeholder={inputPlaceHolder}
                onChange={onChange}
                autoFocus />
        </InputGroup>
        { showEmptyState ?
            <EmptyState hidden={true}>
                <EmptyStateIcon icon={CubesIcon} />
                <Title headingLevel="h4" size="lg">
                    {emptyStateTitle}
                </Title>
                <EmptyStateBody>
                    {emptyStateBody}
                </EmptyStateBody>
            </EmptyState> :
            <DataList aria-label="Checkbox and action data list example">
                <DataListItem aria-labelledby="check-action-item1"></DataListItem>
                <DataListItemRow>
                    <DataListCheck aria-labelledby="check-action-item1" name="check-action-check1" />
                    <DataListCell key="primary content">
                        <span id="check-action-item1">{valueClass === "Author" ? "org.kogito.test.Author" : valueClass === "Book" ? "org.kogito.test.Book" : ""}</span>
                    </DataListCell>,
                </DataListItemRow>
                <DataListItemRow>
                    <DataListCheck aria-labelledby="check-action-item2" name="check-action-check2" />
                    <DataListCell key="primary content">
                        <span id="check-action-item2">{valueClass === "Author" ? "org.kogito.test.Authorization" : valueClass === "Book" ? "org.kogito.test.Booklet" : ""}</span>
                    </DataListCell>,
                </DataListItemRow>
                <DataListItemRow>
                    <DataListCheck aria-labelledby="check-action-item3" name="check-action-check3" />
                    <DataListCell key="primary content">
                        <span id="check-action-item3">{valueClass === "Author" ? "org.kogito.test.Authority" : valueClass === "Book" ? "org.kogito.test.BookStore" : ""}</span>
                    </DataListCell>,
                </DataListItemRow>
            </DataList>
        }
    </>
}

export interface ImportJavaClassesWizardFirstStepContentProps {
    inputLabel: string;
    inputPlaceHolder: string;
    inputOnChange: (value: string) => boolean;
    emptyStateTitle: string;
    emptyStateBody: string;
}
