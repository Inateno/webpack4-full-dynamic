export default class View {
  constructor ( type ) {
    this.id = Date.now();
    this.helper = "Engine View";
    this.type = type || "View";
  }

  start() {
    console.log( "I am a " + this.type + " and my id is ", this.id );
  }
}