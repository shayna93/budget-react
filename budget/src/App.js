import {
  Container,
  Header
} from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App () {
  return (
    <Container>
    
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance:" value="2,550.53" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="income" value="$10.00"/>
      <EntryLine description="expense" value="$10.00" isExpense/>

      <Header as="h3">Add new transaction</Header>

      <NewEntryForm />

    </Container>
  );
}

export default App;
