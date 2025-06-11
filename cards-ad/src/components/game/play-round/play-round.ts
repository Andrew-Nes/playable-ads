import { flipCardToPlayzone } from "src/components/animations/flip-card/flip-card";
import { compareCards } from "../compare-cards/compare-cards";
import { getGameState, updateGameState } from "../game-state/game-state";
import { showMessage } from "../show-message/show-message";

import { debounce } from "src/utils/helpers";
import { Messages } from "src/utils/types";
import { showEndGameOverlay } from "../end-game/end-game";
import { stopTimer } from "../timer/timer";


export async function playRound(): Promise<void> {
  const state = getGameState();

  if (state.roundOngoing) return;

  updateGameState({roundOngoing: true})

  const playerDeck = document.querySelector('#player-deck') as HTMLElement;
  const dealerDeck = document.querySelector('#dealer-deck') as HTMLElement;
  const playerPlay = document.querySelector('#player-play') as HTMLElement;
  const dealerPlay = document.querySelector('#dealer-play') as HTMLElement;

  const playerCard = state.playerHand.shift();
  const dealerCard = state.dealerHand.shift();

  if (!playerCard || !dealerCard) {
    console.warn('One of the hands is empty!');
    return;
  }

  const winner = compareCards(playerCard, dealerCard);

  if (winner === 'player') {
    state.playerHand.push(playerCard, dealerCard);
  } else if (winner === 'dealer') {
    state.dealerHand.push(dealerCard, playerCard);
  } else {
    state.playerHand.push(playerCard);
    state.dealerHand.push(dealerCard);
  }
  
  flipCardToPlayzone(playerCard, playerDeck, playerPlay),
  await debounce(1000);

  flipCardToPlayzone(dealerCard, dealerDeck, dealerPlay),
  await debounce(1500);

  await showMessage(Messages[winner], 1000);
  
  if (!state.timer || state.timer <= 0) {
    showEndGameOverlay();
    stopTimer();
  }
    
  updateGameState({
    playerHand: state.playerHand,
    dealerHand: state.dealerHand,
    round: state.round + 1,
    roundOngoing: false
  });
}