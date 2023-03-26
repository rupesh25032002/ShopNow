import { useEffect, useState } from "react";
import "./App.css";
import Square from "./Sqaure";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [xturn, setxturn] = useState(true);
  const [temp, settemp] = useState("start");
  const [check, setcheck] = useState();

  //Update the array value and change the player
  const handlevalue = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyarray = state;
    copyarray[index] = xturn ? "X" : "0";
    setState(copyarray);
    setxturn(!xturn);
  };

  //Checking the winner after every attempt
  const checkwinner = () => {
    const arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i in arr) {
      if (
        state[arr[i][0]] !== null &&
        state[arr[i][0]] === state[arr[i][1]] &&
        state[arr[i][1]] === state[arr[i][2]]
      ) {
        settemp("win");
        return state[arr[i][0]];
      }
    }

    //if match get draw
    if (
      state[0] !== null &&
      state[1] !== null &&
      state[2] !== null &&
      state[3] !== null &&
      state[4] !== null &&
      state[5] !== null &&
      state[6] !== null &&
      state[7] !== null &&
      state[8] !== null
    ) {
      settemp("draw");
      return;
    }
  };

  //Play again functionality
  const Playagain = () => {
    setState(Array(9).fill(null));
    setxturn(true);
    settemp("start");
  };

  useEffect(() => {
    setcheck(checkwinner());
  }, [xturn]);

  return (
    <>
      {temp == "win" ? (
        <div className="winner">
          <h1>Winner is {check}</h1>
          <button className="mybtn" onClick={Playagain}>Play Again</button>
        </div>
      ) : temp == "draw" ? (
        <div className="draw">
          <h1>Match is Draw!</h1>
       <button className="mybtn" onClick={Playagain}>Play Again</button>
      </div>
      ) : (
        <>
        <div className="tictactoe_conatainer">
        <div>
        <h1 className="heading">TIC TAC TOE</h1>
      </div>
        <div className="containerbox">
          <div className="Rowbox">
            <Square onClick={() => handlevalue(0)} value={state[0]} />
            <Square onClick={() => handlevalue(1)} value={state[1]} />
            <Square onClick={() => handlevalue(2)} value={state[2]} />
          </div>
          <div className="Rowbox">
            <Square onClick={() => handlevalue(3)} value={state[3]} />
            <Square onClick={() => handlevalue(4)} value={state[4]} />
            <Square onClick={() => handlevalue(5)} value={state[5]} />
          </div>
          <div className="Rowbox">
            <Square onClick={() => handlevalue(6)} value={state[6]} />
            <Square onClick={() => handlevalue(7)} value={state[7]} />
            <Square onClick={() => handlevalue(8)} value={state[8]} />
          </div>
        </div>
        </div>
        </>
      )}
    </>
  );
}

export default App;
