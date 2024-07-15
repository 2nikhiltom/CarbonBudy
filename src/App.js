import "./App.css";
import ChatInput from "./ChatInput";
import Question from "./Question";
import Answer from "./Answer";
import "./styles.scss";

function App() {
  return (
    <>
      <div className="chat-wrapper">
        <Question />
        <Answer />
        <Question />
        <Answer />
        <Question />
        <Answer />
        <Question />
        <Answer />
      </div>
      <ChatInput />
    </>
  );
}

export default App;
