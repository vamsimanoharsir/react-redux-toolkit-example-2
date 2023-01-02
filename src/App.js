import './App.css';
import MainComponent from './store/MainComponent';
import AsyncThunkDisplay from './store/AsyncThunkDisplay';

function App() {
  return (
    <div className="App">

      {/* for asyncThunk extraReducer fetchingData redux logger */}
      <MainComponent/>

      {/* to display result of asyncThunk  */}
      {/* <AsyncThunkDisplay/> */}
    </div>
  );
}

export default App;
