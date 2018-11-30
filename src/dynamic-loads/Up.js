import View from "../engine/View";

export default class AdditionalStuff extends View {
  constructor (version) {
    super( "Top tsum" );

    this.helper = "I'm additional - Top";
    this.version = version;
  }
}