import { debounce } from "src/utils";
import { compareCards } from "./compare-cards/compare-cards";
import { getGameState, updateGameState } from "./game-state/game-state";


export async function playRound(): Promise<void> {
  const state = getGameState();

  if (state.roundOngoing) return;
  updateGameState({roundOngoing: true})

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

  await debounce(1000);

  updateGameState({
    playerHand: state.playerHand,
    dealerHand: state.dealerHand,
    round: state.round + 1,
    roundOngoing: false
  });

  console.log(winner);
  // TODO Add check win function;
  // TODO Add cards animation;
}