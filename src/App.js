
import Button from "./components/Button"
import Card from "./components/Card"
import { useState, useEffect } from "react";

// api link: https://api.adviceslip.com/advice
function App() {
  // https://api.adviceslip.com/advice/44
  // https://api.adviceslip.com/advice/{id}, to get a specific id, maximum of about 200
  const [advice, setAdvice] = useState(
  
    {
      "slip": {
        "id": 0, 
        "advice": "Click the green dice to generate a new advice"
      }
    }
  )
  
  useEffect( () => {
    const getAdvice = async () => {
      const adviceFromServer = await fetchAdvice();
      setAdvice(adviceFromServer);
    }
    
    getAdvice();
  }, [])

  const fetchAdvice = async () => {
    const responseData = await fetch ("https://api.adviceslip.com/advice").then((response) => response.json());
    console.log(responseData);
    return responseData;
  }

  const onPress = async () => {
    const adviceFromServer = await fetchAdvice();
    setAdvice(adviceFromServer);
  }

  return (
    <div className="App">
      <Card advice={advice.slip.advice} id={advice.slip.id} />
      <Button onPress={onPress} />
    </div>
  );
}

export default App;
