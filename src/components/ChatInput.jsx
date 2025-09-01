import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import LoadingGif from '../assets/loading-spinner.gif'
// import './ChatInput.css';
export function ChatIput({chatMessage,setChatMessage}){
    const [inputText,setInputText] = useState('')
    function saveInputText(event){
        setInputText(event.target.value);

    }

    function clear(){
        setChatMessage([])
    }
    

    async function sentMessage(){
        if(inputText === '' || inputText === ' '){
            alert('type in')
        }
        else{
        const newChatMessages = [
            ...chatMessage,
            {
            Message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
            }
        ]
        setChatMessage(newChatMessages);
        setInputText('')
        
        setChatMessage([
            ...newChatMessages,
            {
            Message: <img className="loading" src={LoadingGif}/>,
            sender: 'robot',
            id: crypto.randomUUID()
            }
        ]);
        const response = await Chatbot.getResponseAsync(inputText);


        setChatMessage([
            ...newChatMessages,
            {
            Message: response,
            sender: 'robot',
            id: crypto.randomUUID()
            }
        ]);

        }
    }
    async function Key(event){
        if(event.key === 'Escape'){
        setInputText('')
        }
        else if(event.key === 'Enter'){
        if(inputText === '' || inputText === ' '){
            alert('type in')
        }
        else{
            
        const newEnter = [
            ...chatMessage,{
            Message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
            }
        ]
        setChatMessage(newEnter);
        setInputText('')
        
        setChatMessage([
            ...newEnter,{
            Message: <img className="loading" src={LoadingGif}/>,
            sender: 'robot',
            id: crypto.randomUUID()
            }
        ])

        const resEnter = await Chatbot.getResponseAsync(inputText);


        setChatMessage([
            ...newEnter,{
            Message: resEnter,
            sender: 'robot',
            id: crypto.randomUUID()
            }
        ])
        }
        }
    }
    return(
        <>
        <div className="div-ChatIput">
            <input 
            placeholder="Sent a message to Chatbot" 
            size="30"
            onChange={saveInputText}
            onKeyDown={Key}
            value={inputText}
            className="input"
            />
            <button className="send-button" onClick={sentMessage}> Send </button>
            <button className='clear-button' onClick={clear}> Clear </button>
        </div>
        </>
    )
}
