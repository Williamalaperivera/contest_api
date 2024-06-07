import './App.css';
import { Context } from './content/Context';
import { AppRouter } from './routing/AppRouter';

function App() {
  return (
    <div className="App">
        <Context.Provider value='William Alape R'>
          <AppRouter />
        </Context.Provider>
    </div>
  );
}

export default App;