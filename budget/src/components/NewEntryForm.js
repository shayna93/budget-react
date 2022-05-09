import React from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import {Form} from 'semantic-ui-react';
import EntryForm from './EntryForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntryRedux } from '../actions/entries.actions';
import {v4 as uuidv4} from 'uuid'
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {
const {
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,   
  addEntry,
} = useEntryDetails();
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
  )
}

export default NewEntryForm;
