
import './App.css';
import {useState} from 'react';
import Box from './component/Box';

let choice = {
  rock : {name : "Rock",
          img : "https://korearps.wvy.kr/wp-content/uploads/sites/2/2020/03/slider-pic-104.png",
          alt : "rock"},
  paper : {name : "Paper",
          img : "https://korearps.wvy.kr/wp-content/uploads/sites/2/2020/03/slider-pic-102.png",
          alt : "paper"},
  scissors :{name: "Scissors",
          img:"https://korearps.wvy.kr/wp-content/uploads/sites/2/2020/03/slider-pic-103.png",
          alt: "scissors" }
}

function App() {

  const [userSelect, setUserselect] = useState(); 
  const [computerSelect, setComputerselect] = useState();
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const pick = (userChoice) =>{
    setUserselect(choice[userChoice]);  
    let computerChoice = randomChoice();
    setComputerselect(computerChoice);  
    let gameResult = judgement(choice[userChoice], computerChoice)
    setResult(gameResult);

    if (gameResult === "win") {
      setPlayerScore(playerScore + 1);
    } else if (gameResult === "lose") {
      setComputerScore(computerScore + 1);
    }
  }

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie"; // 비긴 경우
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  }

  const randomChoice = () =>{
    let itemArray =  Object.keys(choice);
    let final = itemArray[Math.floor(Math.random() * itemArray.length)];    
    return choice[final];
  }

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setUserselect(null);
    setComputerselect(null);
    setResult("");
  }


  return (
  
    <div className="container">
      <div className="score-box">
        <div className="score">Player {playerScore} : Computer {computerScore}</div>
        <button className="reset-btn" onClick={resetGame}>Reset</button>
      </div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="btn-box">
      <button onClick={() => pick("scissors")}>
          <img className="rotate-scissors" src={choice.scissors.img} alt={choice.scissors.alt}/>
      </button>
      <button onClick={() => pick("paper")}>
          <img className="rotate-paper" src={choice.paper.img} alt={choice.paper.alt } />
      </button> <button onClick={() => pick("rock")}>
          <img className="rotate-rock" src={choice.rock.img} alt={choice.rock.alt} />
      </button>      
      </div>
     </div>
   
    
  );
}

export default App;
