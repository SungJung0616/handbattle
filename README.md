# HandBattle Game 🧐

![image](./public/image/mainpage.png)

A game project called HandBattle made using JavaScript, React, and CSS. It follows the same rules as the classic Rock, Paper, Scissors game. Users can select one of the items (Rock, Paper, Scissors), and the computer randomly selects one item. The outcome can be Win, Lose, or Tie. If the result is Win, the user scores 1 point. Scores can be reset at any time using the Reset button.

<br>

## Developer

| <img src="https://avatars.githubusercontent.com/u/35758170?v=4" width="150" height="150"/> |
| :----------------------------------------------------------------------------------------: |
|              Sung U Jung<br/>[@SungJung0616](https://github.com/SungJung0616)              |

<br>

## Deployment Address

[HandBattle Game](https://sj-handbattle.netlify.app/)

## ## Stacks

### Environment

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <

### Development

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

### Deployment

<img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7">
<br>

## Features

### JavaScript Utilization

- When the user selects an item via button click, the item is passed as a function parameter.
- The computer randomly selects an item when the user makes a choice.
- The user's and computer's items are compared to determine the winner.
- The winner is determined, and the score object is created, updated, and retrieved from local storage.

### React Utilization

- Components are designed and organized for reusability and manageability.
- Similar useState Hook values are created as objects to simplify the code.
- State items, win/loss status, and scores are assigned and updated using setState.
- Props are used to pass state values for rendering items, win/loss status, and scores.
- Ternary operators are used to check local storage and set scores accordingly.

### CSS Utilization

- The design and responsive work are done using CSS.
