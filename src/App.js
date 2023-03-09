import Button from "./components/Button"
import Card from "./components/Card"
import { useState, useEffect } from "react";

// api link: https://api.adviceslip.com/advice
function App() {
  const [advice, setAdvice] = useState([])
  
  useEffect( () => {
    const fetchAdvice = async () => {
      const res = await fetch ("http://localhost:5000/slip");
      const responseData = await res.json();
      console.log(responseData);

      setAdvice(responseData);
    }

    fetchAdvice();
  }, [])

  return (
    <div className="App">
      <Card advice={advice.advice} id={advice.id}/>
      <Button />
    </div>
  );
}

export default App;
