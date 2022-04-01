import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import {Form} from 'semantic-ui-react';
import EntryForm from './EntryForm';

function NewEntryForm({
  addEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
      />

      <ButtonSaveOrCancel
        addEntry={addEntry}
      />
    </Form>
  );
}

export default NewEntryForm;
