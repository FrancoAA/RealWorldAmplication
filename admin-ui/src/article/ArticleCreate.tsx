import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ArticleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Body" multiline source="body" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
