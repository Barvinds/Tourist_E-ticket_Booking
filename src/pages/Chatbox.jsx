import React, { useState } from 'react';
import './style.css';

const Chatbox = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleChatbox = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="chatbox-container">
            <div className={`chatbox ${isActive ? 'chatbox--active' : ''}`}>
                <div className="chatbox__support">
                    <div className="chatbox__header">
                        <div className="chatbox__image--header">
                            <img 
                                src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" 
                                alt="User"
                            />
                        </div>
                        <div className="chatbox__content--header">
                            <h4 className="chatbox__heading--header">Chat support</h4>
                            <p className="chatbox__description--header">Hi. My name is Sam. How can I help you?</p>
                        </div>
                    </div>
                    <div className="chatbox__messages">
                        <div></div>
                    </div>
                    <div className="chatbox__footer">
                        <input 
                            type="text" 
                            placeholder="Write a message..." 
                        />
                        <button 
                            className="chatbox__send--footer send__button"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
            <div className="chatbox__button">
                <button onClick={toggleChatbox}>
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/009/415/138/original/question-chat-illustration-3d-png.png" 
                        alt="Chat Icon"
                        width="50px" 
                        height="50px"
                    />
                </button>
            </div>
        </div>
    );
};

export default Chatbox;
