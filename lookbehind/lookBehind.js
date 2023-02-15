"use strict";

function solution(needle, haystack, greedy = true) {
  let size = needle.length;
  let start = size - 1;
  let token = haystack.slice(0, size);
  let i;
  let found = [];

  for (i = start; i < haystack.length; i++) {
    if (token === needle) {
      found.push(i - start);
      if (!greedy) {
        break;
      }
    }

    if (haystack[i + 1]) {
      token = token.slice(1) + haystack[i + 1];
    }
  }

  return found;
}

// var txt = "ABABDABACADABABCABAB"; //11
// var pat = "ABABCABAB";

var txt = "AABAACAADAABAABA"; //0,9,12
var pat = "AABA";
console.log(solution(pat, txt, true));
