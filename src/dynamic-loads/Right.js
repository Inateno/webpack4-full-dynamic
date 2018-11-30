import View from "../engine/View";

export default class AdditionalStuff extends View {
  constructor (version) {
    super( "Right tsum" );

    this.helper = "I'm additional - right";
    this.version = version;
  }
}