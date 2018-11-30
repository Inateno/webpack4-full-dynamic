import View from "../engine/View";
import Base from "../components/Base.js";

export default class AdditionalStuff extends View {
  constructor (version) {
    super( "Down tsum" );

    this.helper = "I'm additional - Down";
    this.version = version;

    this.base = Base;
  }
}