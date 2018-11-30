/**
  this file is only used by dynamic-loads components
  actually webpack include this file in each dynamic bundle
  instead of that it should:
    - create one more bundle to load only if we load one of those optional dynamic bundles
    - include this by default in the main chunk
  

  The only way to bypass it today is to add a fake import Base from "components/Base" in Application for example
*/

export default {
  thisShouldBeASharedChunk: true,
  stringifiedStuff: "I'm not supposed to be everywhere, nop"
};