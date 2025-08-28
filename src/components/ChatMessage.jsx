import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'
import './ChatMessage.css'
export function ChatMessage({Message,sender}){
  // const message = props.Message;
  // const sender = props.sender;
  // const {Message,sender} = props;
  //  if(sender === 'robot'){
  //   return(
  //     <div>
  //       <img src="robot.png" width={30}/>
  //       {Message}
  //     </div>
  //   )
  // }

  return(
      <div className={sender === 'user' 
        ? 'chat-Message-user' 
        : 'chat-Message-robot'
      }>
        {sender === "robot" &&(
            <img src={RobotImage} className="chat-Message-profile"/>)
        }

          <div className="chat-Message-text">{Message}</div>

        {sender === "user" &&(
            <img src={UserImage} className="chat-Message-profile" />)
        }
          
        
      </div>
  )
}
