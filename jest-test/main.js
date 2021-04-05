"use strict";

fetch("http://127.0.0.1:3000/text")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
