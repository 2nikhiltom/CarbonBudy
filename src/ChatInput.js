import { TextArea, unstable__Slug as Slug, IconButton } from "@carbon/react";
import { Send } from "@carbon/icons-react";

function Input() {
  const slug = <Slug></Slug>;
  const send = () => console.log('send')

  return (
    <div className="chat-input-wrapper">
      <TextArea slug={slug} placeholder="Enter your text here" />
      <IconButton label="Send" className="send-button" onClick={send}>
        <Send />
      </IconButton>
    </div>
  );
}

export default Input;
