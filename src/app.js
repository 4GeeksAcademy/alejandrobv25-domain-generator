/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["her", "your", "his", "their", "our"];
  let adj = ["amazing", "strange", "random", "cute"];
  let noun = ["jogger", "racoon", "thoughts", "shoes"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        console.log(`${pronoun[i]}${adj[j]}${noun[x]}.com`);
      }
    }
  }
};
