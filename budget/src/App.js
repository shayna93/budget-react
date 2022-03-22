import {Container} from 'semantic-ui-react';
import {useState} from 'react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';

function App () {

  const [entries, setEntries] = useState (initialEntries);

 

  function deleteEntry(id){
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function addEntry(description, value, isExpense){
    const result = entries.concat({
      id: entries.length+1, 
      description, 
      value,
      isExpense
    });
    console.log('result', result);
    console.log('entries', entries);
    setEntries(result);
  }


  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance:" value="2,550.53" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader title="Add new transaction"/>
      <NewEntryForm addEntry={addEntry}/>
    </Container>
  );
}

export default App;

var initialEntries = [
  {

    id: 1,
    description: 'Work Income',
    value: '$1,000.00',
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water Bill',
    value: '$20.00',
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300.00',
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power Bill',
    value: '$50',
    isExpense: true,
  },
];
