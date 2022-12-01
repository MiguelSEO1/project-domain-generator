/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const domainGenerator = (arr1, arr2, arr3) => {
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var r = 0; r < noun.length; r++) {
        console.log(pronoun[i] + adj[j] + noun[r] + ".com");
      }
    }
  }
};

domainGenerator(pronoun, adj, noun);
