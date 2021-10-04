"use strict";

function it (label, callback){
  console.log('test:' + label)
  callback()
}

function expect (actual){
  return {
    toEqual: function(expected){
      if (actual == expected) {
        console.log('pass')
      } else 
        console.log('fail')
    }, 
    toContain: function(expected){
      if (actual.includes(expected)) {
        console.log('pass')
      } else 
      console.log('fail')
    }, 
    toNotEqual: function(expected) {
      if (actual !== expected) {
        console.log('pass')
      } else 
        console.log('fail')
    }
  }
}