import {
  faHandBackFist,
  faHandScissors,
  faHand,
} from "@fortawesome/free-regular-svg-icons";
import "./Game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

function Game() {
  const [computerChoice, setComputerChoice] = useState(null);
  const [hasChosen, setHasChosen] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  //scissors:0, paper:2, rock:2

  useEffect(() => handleWinner(), [hasChosen]);

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    setComputerChoice(Math.floor(Math.random() * 3));
    setHasChosen(true);

    console.log(computerChoice, playerChoice);
  };

  const handleRetry = () => {
    setHasChosen(false);
  };

  const handleWinner = () => {
    if (playerChoice === computerChoice) {
      setWinner("tied");
    } else if (playerChoice === 0) {
      if (computerChoice === 1) {
        setWinner("won");
      } else {
        setWinner("lost");
      }
    } else if (playerChoice === 1) {
      if (computerChoice == 0) {
        setWinner("lost");
      } else {
        setWinner("won");
      }
    } else {
      if (computerChoice === 0) {
        setWinner("won");
      } else {
        setWinner("lost");
      }
    }
  };

  return (
    <div>
      <div className="title">
        <h1>
          <span className="s">Scissors</span>, <span className="p">Paper</span>{" "}
          , <span className="r">Rock</span> !
        </h1>
      </div>
      <div className="game-box">
        <FontAwesomeIcon
          icon={faRotateRight}
          onClick={() => handleRetry()}
          className="retry"
        />
        <div className="columns">
          <div className="player-choice game-column">
            <div className="player-title sub-title">
              <h2>Player</h2>
            </div>
            {hasChosen ? (
              <>
                {playerChoice === 0 ? (
                  <FontAwesomeIcon
                    className="choice-icon"
                    icon={faHandScissors}
                  />
                ) : playerChoice === 1 ? (
                  <FontAwesomeIcon className="choice-icon" icon={faHand} />
                ) : (
                  <FontAwesomeIcon
                    className="choice-icon"
                    icon={faHandBackFist}
                  />
                )}
              </>
            ) : (
              <>
                <p>What will you pick :</p>
                <div className="choices">
                  <div className="choice">
                    <h3>Scissors</h3>
                    <FontAwesomeIcon
                      className="icon"
                      onClick={() => {
                        handleChoice(0);
                      }}
                      icon={faHandScissors}
                    />
                  </div>
                  <div className="choice">
                    <h3>Paper</h3>
                    <FontAwesomeIcon
                      className="icon"
                      onClick={() => {
                        handleChoice(1);
                      }}
                      icon={faHand}
                    />
                  </div>
                  <div className="choice">
                    <h3>Rock</h3>
                    <FontAwesomeIcon
                      className="icon"
                      onClick={() => {
                        handleChoice(2);
                      }}
                      icon={faHandBackFist}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="computer-choice game-column">
            <div className="computer-title sub-title">
              <h2>Computer</h2>
            </div>
            {hasChosen ? (
              computerChoice === 0 ? (
                <FontAwesomeIcon
                  className="choice-icon"
                  icon={faHandScissors}
                />
              ) : computerChoice === 1 ? (
                <FontAwesomeIcon className="choice-icon" icon={faHand} />
              ) : (
                <FontAwesomeIcon
                  className="choice-icon"
                  icon={faHandBackFist}
                />
              )
            ) : (
              <>
                <p>The computer is choosing</p>
                <div className="loader">
                  <span className="a1">.</span>
                  <span className="a2">.</span>
                  <span className="a3">.</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="winner-is">
          {hasChosen ? (
            <>
              <h2>You {winner} !</h2>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Game;
