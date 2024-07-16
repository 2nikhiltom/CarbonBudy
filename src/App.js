import "./App.css";
import ChatInput from "./ChatInput";
import Question from "./Question";
import Answer from "./Answer";
import "./styles.scss";

function App() {
  return (
    <>
      <ChatInput />
      <div className="chat-wrapper">
        <Answer />
      </div>
    </>
  );
}

export default App;
