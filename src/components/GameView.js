import View from "../engine/View";

export default class GameView extends View {
  constructor () {
    super( "GameView" );
    
    this.helper = "I'm GameView";
  }

  dynamicLoad( code ) {
    var dynModule = "Empty";
    switch( code )
    {
      case 37:
        dynModule = "Left";
        break;
      case 38:
        dynModule = "Up";
        break;
      case 39:
        dynModule = "Right";
        break;
      case 40:
        dynModule = "Down";
        break;
    }

    import( "../dynamic-loads/" + dynModule )
      .then( stuff => {
        var tsum = new stuff.default();
        tsum.start();
      } )
      .catch( e => {
        console.error( "Error on dynamic load" );
        console.error( e );
      } );
  }
}