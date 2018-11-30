import View from "../engine/View";
import Left from "./Left";

export default class AdditionalStuff extends View {
  constructor (version) {
    super( "Empty tsum" );
    
    this.helper = "I'm additional - empty, but I require also Left just for fun";
    this.version = version;

    // let's say we have some dynamic modules that can be dependant on others
    // it's "okay" to include all the code required by left in this package
    // the problem is later, I require "Left" and it is downloaded (but it is the same exact code??)
    // webpack should recognize this module as already loaded
    this.left = new Left(123);
  }
}