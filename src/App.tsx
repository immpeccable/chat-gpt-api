import "./App.css";
import axios from "axios";
const env = import.meta.env;
const OPENAI_API_KEY = env.VITE_OPENAI_API_KEY;

function App() {
  async function apiRequest() {
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "What is the point of life" }],
      temperature: 0.7,
    };
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  }

  return (
    <div className="App">
      <button onClick={apiRequest}>Make API Request</button>
    </div>
  );
}

export default App;
