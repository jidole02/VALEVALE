import PlayGround from "./components/playground/index";
import GlobalStyle from "./style/globalStyle";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Menu from "./components/menu/index";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Route exact path="/" component={Menu}/>
      <Route path="/play/:id" component={PlayGround}/>
    </Router>
  );
}

export default App;
