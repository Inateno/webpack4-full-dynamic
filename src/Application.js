import GameView from "./components/GameView";

var g = new GameView();
g.start();
console.log( "watching events" )

window.document.addEventListener( "keydown", ev => {
  // 25 left
  // 26 up
  // 27 right
  // 28 bottom
  console.log( "Input keyDown yay", ev.keyCode )
  g.dynamicLoad( ev.keyCode );
} );

window.document.addEventListener( "pointerdown", ev => {
  // 25 left
  // 26 up
  // 27 right
  // 28 bottom
  console.log( "Input pointerDown yay" )
  g.dynamicLoad( NaN );
} );