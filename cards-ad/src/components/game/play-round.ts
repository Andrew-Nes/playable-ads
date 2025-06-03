import { compareCards } from "./compare-cards";
import { getGameState, updateGameState } from "./game-state";

export function playRound(): void {
  const state = getGameState();
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

  updateGameState({
    playerHand: state.playerHand,
    dealerHand: state.dealerHand,
    round: state.round + 1,
  });

  console.log(winner);
  // TODO Add check win function;
  // TODO Add cards animation;
}