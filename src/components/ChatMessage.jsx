import RobotImage from '../assets/robot.png'
// import UserImage from '../assets/user.png'
import UserProfile from '../assets/profile-1.jpg'
import dayjs from 'dayjs';

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
  console.log(UserProfile);
        const time = dayjs().valueOf();
        const ct = dayjs(time).format('h:mma')
  
  return(
      <div className={sender === 'user' 
        ? 'chat-Message-user' 
        : 'chat-Message-robot'
      }>
        {sender === "robot" &&(
            <img src={ RobotImage } className="chat-Message-profile"/>)
        }

          <div className="chat-Message-text">{Message} <p className='red'>{ct}</p></div>

        {sender === "user" &&(
            <img src={ UserProfile } className="chat-Message-profile" />)
        }
          
        
      </div>
  )
}
