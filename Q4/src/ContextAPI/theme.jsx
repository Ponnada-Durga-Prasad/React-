import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function switchTheme() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button onClick={toggleTheme}>Click to change the theme</button>
    </div>
  );
}
