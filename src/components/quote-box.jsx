import React from "react";

export function QuoteBox() {

   return(
    <div id="quote-box">
        <p id="text">Frase random</p>
        <p id="author">Autor random</p>
        <a id="tweet-quote" href="/">Tweet Quote</a>
        <br/>
        <br/>
        <button id="new-quote">New Quote</button>
    </div>
   );
}