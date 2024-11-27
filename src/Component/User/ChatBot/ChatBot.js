import React, { useState } from 'react'

const ChatBot = () => {
  const [llmWrongAnswer,setLllmWrongAnswer]=useState(false)
  const [CheatDetection,setCheatDetection]=useState(false)
  const [UnpromptableWords,setUnpromptableWords]=useState(false)
  const [CorrectAnswer,setCorrectAnswer]=useState(false)
  return (
    <section className="prompt-main">
      <div className="prompt_in">
        <div className="prompt_in_sort">
          <div className="prompt_in_sort_left">
            <span>Answer:</span>
            <p>French Quarter</p>
          </div>
          <div className="prompt_in_sort_right">
            <span>Unpromptables:</span>
            <div className="select">
            <select name="format" id="format" defaultValue="pdf">
                <option value="pdf">Historic District</option>
                <option value="txt">Jazz Music</option>
                <option value="epub">Mardi Gras</option>
                <option value="fb2">Bourbon Street</option>
           </select>
            </div>
          </div>
        </div>
        <div className="enter_prompt">
          <div className="input-group-enter">
            <input type="text" placeholder="Enter your prompt here..." />
          </div>
          <div className="send">
            <img src="assets/img/send.png" alt="Send" />
          </div>
        </div>
        {(!CheatDetection && !UnpromptableWords) ? (
            <div className="llm_response">
              <input type="text" placeholder="LLM Response Here" />
            </div>
          ) : (
            <div className="llm_response1">
              <p className="rr">X No LLM Response</p>
            </div>
          )}
      {llmWrongAnswer &&  
      <div className="note">
          <p>The LLM did not return the correct answer.  Try again!</p>
       </div>
       }
       {CheatDetection &&  
       <div className="note_red">
      <p>Cheat Detection activated!</p>
      <p>You cannot use whitespace to trick the LLM or avoid string matching!</p>
       </div>
       }
       {UnpromptableWords &&  
       <div className="note_red">
      <p>Unpromptable used!</p>
      <p>Your prompt contained the Unpromptable words:<br/><br/><br/>New Orleans and Historic District</p>
       </div>
       }

       {CorrectAnswer && (
          <div className="correct-answer">
            <div className="text-content">
              <p>Correct!</p>
              <p>The LLM returned the correct answer!</p>
            </div>
            <button className="submit-button">Next Question</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ChatBot
