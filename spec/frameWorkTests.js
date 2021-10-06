"use strict";

function it (label, callback){
  console.log(`Test: ${label}`)
  callback()
}

function expect (actual) {
  return {
    toEqual: function (expected) {
      if (actual == expected) {
        console.log(`Pass`)
      } else 
        console.log(`Fail, expected: ${expected}, received: ${actual}`)
    }, 
    toNotEqual: function (expected) {
      if (actual !== expected) {
        console.log(`Pass`)
      } else 
        console.log(`Fail, expected and received were the same`)
    },
    toContain: function (expected){
      if (actual.includes(expected)) {
        console.log(`Pass`)
      } else 
      console.log(`Fail, not included in the list`)
    }, 
    toNotContain: function (expected){
      if (!actual.includes(expected)) {
        console.log(`Pass`)
      } else 
      console.log(`Fail, ${actual} is still included in the list`)
    }, 
    toBeAnArray: function () {
      if (actual instanceof Array) {
        console.log(`Pass`)
      } else {
        console.log(`Fail, expected: Array, received: ${typeof actual}`)
      } 
    }
  }
}