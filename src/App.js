import './App.css';
import { Header, Container } from './components/Layout'
import { Content } from './components/Content'

const appName = "Weather Buddy"

function App() {
  return (
    <div className="App">
      <Header title={appName.toUpperCase()} />
      <Container>
        <Content />
      </Container>
    </div>
  );
}

export default App;
