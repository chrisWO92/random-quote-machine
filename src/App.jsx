import React, { useEffect, useState } from 'react'
import './App.css';
import NewQuote from './components/new-quote/NewQuote';
import QuoteBox from './components/quote-box/QuoteBox';
import Socials from './components/socials/Socials';

const API = 'https://type.fit/api/quotes';

const App = () => {

  const [quotes, setQuotes] = useState([{
    'text': "Genius is one percent inspiration and ninety-nine percent perspiration.",
    'author': "Thomas Edison"
  }]);
  const [index, setIndex] = useState(0);
  const [hsl, setHsl] = useState(358);

  const quote = quotes[index];
  const pastel = 'hsl(' + hsl + ', 100%, 80%)';

  const getRandomIndex = () => {
    if(quotes.length > 0) {
      setIndex(Math.floor(Math.random() * quotes.length));
      setHsl(Math.floor(Math.random() * 360));
			
			// const index = Math.floor(Math.random() * quotes.length);
			// const hsl = Math.floor(Math.random() * 360);
			
			// this.setState({
			// 	indexQuote,
			// 	hsl
			// });
			
		}
  }

  useEffect(() => {
    fetch(API).then(res => res.json())
			.then(res => {
        setQuotes(res);
        getRandomIndex();
				// this.setState({
				// 	quotes: res
				// }, this.getRandomIndex);
		});
  }, [index]);

  return (
    <div id='random-quote-machine' style={{backgroundColor: pastel}}>
      <div id="wrapper">
        {
          quote && (<QuoteBox pastel={pastel} quote={quote} />)
        }
        <div id="buttons">
          <Socials
            pastel={pastel}
            quote={quote}
          />
          <NewQuote
            pastel={pastel}
            quotes={quotes}
            index={index}
            hsl={hsl}
            //setQuotes={setQuotes}
            setIndex={setIndex}
            setHsl={setHsl}
            getRandomIndex={getRandomIndex}
          />
        </div>
      </div>      
    </div>
  )
}

export default App
