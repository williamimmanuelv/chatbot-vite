import {  useEffect, useState } from 'react';
import { ChatIput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css';
import { chatbot } from 'supersimpledev';
import dayjs from 'dayjs';

function App(){
      const [chatMessage,setChatMessage] = useState(
        JSON.parse(localStorage.getItem('message'))||
        [{
          Message: 'hello',
          sender: 'user',
          id: 'id1' 
        }]
      );
        
      // const [chatMessage,setChatMessage] = array;
      // const chatMessage = array[0];
      // const setChatMessage = array[1];

      
      useEffect(()=> {
        if(chatMessage){
          localStorage.setItem('message',JSON.stringify(chatMessage));
          JSON.parse(localStorage.getItem('message'))
       }
        console.log(1);
        
      },[chatMessage])

      const day = dayjs().valueOf()
      const time = dayjs(day).format('H:mm a')
      useEffect(() => {
        chatbot.addResponses({
          name: 'Robot',
          time: time,
        })
      },[time])
      
      
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
