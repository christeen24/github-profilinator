import React, { useContext } from 'react';
import { FIELD_TYPES } from '../../config/global';
import TextField, { TextFieldData, TextFieldOptions } from './TextField';
import { Card } from 'antd';
import { globalContext } from '../../context/GlobalContextProvider';
import ImageField from './ImageField';
import GithubReadmeStatsField from './GithubReadmeStatsField';
import SkillsField from './SkillsField';
import SocialField from './SocialField';

export interface FieldProps {
    id?: string;
    sectionIndex?: number;
    columnIndex?: number;
    fieldIndex?: number;
    type?: FIELD_TYPES;
    sectionId?: string;
    data?: any;
    options?: any;
    deleteField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => void;
    modifyField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
    ) => void;
    shiftField?: (
        fieldProps: FieldProps & Required<Pick<FieldProps, 'columnIndex' | 'fieldIndex' | 'sectionIndex'>>,
        location: 'up' | 'down',
    ) => void;
}

export const Field = (
    props: FieldProps & Required<Pick<FieldProps, 'id' | 'type' | 'sectionIndex' | 'columnIndex' | 'fieldIndex'>>,
) => {
    const context = useContext(globalContext);

    if (props.type === FIELD_TYPES.TEXT)
        return (
            <Card style={{ marginBottom: 20 }}>
                <TextField
                    {...props}
                    sectionId={props.sectionId}
                    deleteField={context.deleteField}
                    modifyField={context.modifyField}
                    shiftField={context.shiftField}
                />
            </Card>
        );
    else if (props.type === FIELD_TYPES.IMAGE)
        return (
            <Card style={{ marginBottom: 20 }}>
                <ImageField
                    {...props}
                    sectionId={props.sectionId}
                    deleteField={context.deleteField}
                    modifyField={context.modifyField}
                    shiftField={context.shiftField}
                />
            </Card>
        );
    else if (props.type === FIELD_TYPES.GITHUB_STATS)
        return (
            <Card style={{ marginBottom: 20 }}>
                <GithubReadmeStatsField
                    {...props}
                    sectionId={props.sectionId}
                    deleteField={context.deleteField}
                    modifyField={context.modifyField}
                    shiftField={context.shiftField}
                />
            </Card>
        );
    else if (props.type === FIELD_TYPES.SKILLS)
        return (
            <Card style={{ marginBottom: 20 }}>
                <SkillsField
                    {...props}
                    sectionId={props.sectionId}
                    deleteField={context.deleteField}
                    modifyField={context.modifyField}
                    shiftField={context.shiftField}
                />
            </Card>
        );
    else if (props.type === FIELD_TYPES.SOCIAL)
        return (
            <Card style={{ marginBottom: 20 }}>
                <SocialField
                    {...props}
                    sectionId={props.sectionId}
                    deleteField={context.deleteField}
                    modifyField={context.modifyField}
                    shiftField={context.shiftField}
                />
            </Card>
        );
    else return <>Invalid field type</>;
};

export default Field;
