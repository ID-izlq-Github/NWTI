import { TestProvider, useTest } from './context/TestContext';
import { IntroScreen } from './components/screens/IntroScreen';
import { TestScreen } from './components/screens/TestScreen';
import { ResultScreen } from './components/screens/ResultScreen';
import './App.css';

function AppRouter() {
  const { state } = useTest();

  switch (state.screen) {
    case 'intro':
      return <IntroScreen />;
    case 'test':
      return <TestScreen />;
    case 'result':
      return <ResultScreen />;
    default:
      return <IntroScreen />;
  }
}

export default function App() {
  return (
    <TestProvider>
      <div className="app-container">
        <AppRouter />
      </div>
    </TestProvider>
  );
}