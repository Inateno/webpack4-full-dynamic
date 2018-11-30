import View from "../engine/View";
import Base from "../components/Base.js";

export default class AdditionalStuff extends View {
  constructor (version) {
    super( "Left tsum" );

    this.helper = "I'm additional - left";
    this.version = version;

    this.base = Base;
  }
}