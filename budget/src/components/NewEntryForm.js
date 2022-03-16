import React from 'react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import { Form } from 'semantic-ui-react'

function NewEntryForm() {
    return (    

    <Form unstackable>
        <Form.Group>
          <Form.Input 
            width={12} 
            label='Description' 
            icon='tags' 
            placeholder='New shiny thing'>
            </Form.Input>
          <Form.Input 
            width={4} 
            label='Value' 
            icon='dollar' 
            iconPosition='left'
            placeholder='100.00'>
            </Form.Input>
        </Form.Group>
        <ButtonSaveOrCancel/>
      </Form>
    )
}

export default NewEntryForm
