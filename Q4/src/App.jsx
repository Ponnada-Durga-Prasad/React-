import { ThemeProvider } from "./ContextAPI/ThemeContext";
import "./App.css";
import { switchTheme } from "./ContextAPI/theme";
function App() {
  return (
    <>
      <ThemeProvider>
        <switchTheme />
      </ThemeProvider>
    </>
  );
}

export default App;
