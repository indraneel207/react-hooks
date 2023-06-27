import './App.css';
// import UseEffectSample from './components/UseEffectSample';
// import UseMemoSample from './components/UseMemoSample';
// import UseRefSample from './components/UseRefSample';
// import UseStateSample from './components/UseStateSample';
import ParentFunction from './components/useContextSample/ParentFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentFunction/>
      </header>
    </div>
  );
}

export default App;
