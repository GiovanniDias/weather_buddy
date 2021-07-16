import './App.css';
import { Header, Container } from './components/Layout'

const appName = "Weather Buddy"

function App() {
  return (
    <div className="App">
      <Header title={appName.toUpperCase()} />
      <Container>
        {/*
          TODO: Add Content component
        */}
      </Container>
    </div>
  );
}

export default App;
