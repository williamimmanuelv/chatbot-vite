import { useState } from 'react'
import { ChatIput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import './App.css'

      


////////////////////////  CUSTOM HOOKS 





function App(){
      const [chatMessage,setChatMessage] = useState([
        ])
        
      // const [chatMessage,setChatMessage] = array;
      // const chatMessage = array[0];
      // const setChatMessage = array[1];
  
  return(
    <div className="app-container">

    {chatMessage.length === 0 && 
      <p className="welcome"> Welcome to the chatbot project! 
        Send a message using the textbox
      </p>
    }
      <ChatMessages
        chatMessage={chatMessage}/>
      <ChatIput 
        chatMessage={chatMessage} 
        setChatMessage={setChatMessage}
      />
    </div>
    )
  }

export default App
