import React, { useState } from "react";
import Timer from "../components/Timer";
import ControlButtons from "../components/ControlButton";
  
function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  
  return (
      <>
          <style jsx>{` 
          .stop-watch{
                height: 300px;
                width: 500px;
                background-color: #FFFF;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
              
            }
            .container {
    padding: 0 2rem;
  }
  .main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  }
  
  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  
  .title a {
    color: #0070f3;
    text-decoration: none;
  }
  
  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }
  
  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }
  
  .title,
  .description {
    text-align: center;
  }
  
  .description {
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
  }
  
  .code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;
  }
  
  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
  }
  
  .card {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
  }
  
  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  
  .card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  
  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
  
  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }
  
  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }
           `}
          </style>
            
      <div className="main">
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div></div>
    </>
  );
}
  
export default StopWatch;