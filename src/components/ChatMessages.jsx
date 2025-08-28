import { useAutoScroll } from "./useAutoScroll";
import { ChatMessage } from './ChatMessage';
import './ChatMessages'
export function ChatMessages({chatMessage}){
      const chatMessageRef = useAutoScroll([chatMessage]);

      return(
        <div className="chat-Message-container"
          ref={chatMessageRef}>
          {chatMessage.map((chatMessage) => {
              return (
                <ChatMessage
                  Message={chatMessage.Message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
                );
            })
          }
        </div>
      )

    }