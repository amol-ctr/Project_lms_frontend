import React, { useState } from 'react'
import axios from 'axios'

import './../components/Chatbot.css'

function Chatbot() {
    const [messages,setMessages]=useState([{user:false,text:'How can I help you?'}]);  //stores chat history between bot and user
    const [input,setInput]=useState('');    // msg typed in input bar

    const [closed,setClosed]=useState(false);   // handles whether chatbot window is open or closed

    const sendMessages=async()=>{
        if(input.trim()){
            const newMessages=[...messages,{user:true,text:input}]; //adds new message by user to chat history
            setMessages(newMessages);
            try {
                const response=await axios.post('/api2/chatbot',{message:input});   // sends msg to bot
                const temp=[...newMessages,{user:false,text:response.data.reply}];    // adds message by bot into chat history
                setMessages(temp);
            } 
            catch (err) {
                const temp=[...newMessages,{user:false,text:'Error Occured'}];
                setMessages(temp);  // if reply by bot can't be obtained,adds "error occured" in chat history
                console.log(err);
            }

            setInput('');   // after sending the msg,input bar should become empty
        }
    }

    return (
        <div className="chatbot">
            <div className=' flex justify-center'>
                <h1 className=' font-bold mr-32'>CHATBOT</h1>
                <h1 className=' font-thin text-sm text-right underline cursor-pointer' onClick={()=>{setClosed(closed?false:true);setMessages(messages.length?[]:[{user:false,text:'How can I help you?'}])}}>{closed?"Open":"Close"}</h1>
            </div>
            <div className={closed?"new":"messages"}>
                {messages.map((msg,index)=>(
                    <div key={index} className={msg.user?"user-msg":"bot-msg"}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
             type="text"
             className=' pl-1'
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             onKeyDown={(e)=>{e.key==='Enter' && sendMessages()}}
            />
            <button class="button" onClick={sendMessages}>Send</button>     {/* on clicking this button, sendMessages callback function is called */}
        </div>
    )
}

export default Chatbot