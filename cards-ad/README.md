#  Card Clash - Playable ad style html game.

A short playable ad style hml game designed to demonstrate to a user a piece of gameplay of a casual card game. Game rules: a card deck is shuffled and split in half between a  player and a dealer, rhe game consists of rounds, in each of them a player clicks on  his deck to take a card from top, then dealers card is taken. The cards are compared and who's card is elder wins round and gets both cards, with one exeption (2 is elder than ace). Whoever takes more rounds in 30 seconds is praised as a winner or a draw is declared if round wins number is equal for both participants.

##  Features

-  Single-file HTML output for easy embedding
-  Sound effects preloaded and optimized
-  Mobile-friendly and responsive layout
-  Fast load time and minimal dependencies


##  Tech Stack

### Frontend
- HTML5
- CSS3 
- TypeScript

### Tools
- Vite.js – for development and bundling
- Vitest – for unit testing
- ESLint + Prettier – for code quality
- vite-plugin-singlefile – for single HTML file build

## Getting started

1. Clone this repository to your PC (read how to clone repo here: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository);
2. Open repositore folder in your IDE and run terminal;
3. Go to cards-ad branch (git checkout cards-ad) then move to project folder(cd cards-as);
4. Install  dependencies (npm install);
5. Use one of the scripts below based on your needs(npm run script*):
  
  *Scripts:
  - dev - to run the game locally to change project code and follow changes live;
  - preview - to preview your build;
  - build - to make finaal build;
  - lint - to check your code quality;
  - prettier - to auto-format your code in certain style;
  - test - to run tests;
  - coverage - to run tests with coverage;

