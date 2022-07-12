import {Container} from 'semantic-ui-react';
import {useState, useEffect} from 'react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import {useDispatch, useSelector} from 'react-redux';
import { getAllEntries } from './actions/entries.actions';

function App () {
  const [incomeTotal, setIncomeTotal] = useState (0);
  const [expenseTotal, setExpenseTotal] = useState (0);
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector (state => state.modals);
  const [total, setTotal] = useState (0);
  const entries = useSelector (state => state.entries);

  useEffect (() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index]);

  }, [isOpen, id, entries]);

  useEffect (
    () => {
      let totalIncomes = 0;
      let totalExpenses = 0;
      entries.map (entry => {
        if (entry.isExpense) {
          return (totalExpenses += Number (entry.value));
        }
        return (totalIncomes += Number (entry.value));
      });
      setTotal (totalIncomes - totalExpenses);
      setExpenseTotal (totalExpenses);
      setIncomeTotal (totalIncomes);
    },
    [entries]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntries());

  }, []);

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance:" value={total} />
      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry}/>

    </Container>
  );
}

export default App;
