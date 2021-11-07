import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Info from './components/Info';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1 className="title">STAR WARS API!</h1>
      <Form></Form>
      <Switch>
        <Route path="/people/:id">
          <Info></Info>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
