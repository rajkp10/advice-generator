import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [adviceObj, setAdviceObj] = useState("");

  const handleFetch = () => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((resp) => setAdviceObj(resp.data.slip));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-DarkBlue">
      <div className="pt-4 pb-2 px-3  rounded-lg shadow-md bg-DarkGrayishBlue">
        <Card adviceObj={adviceObj} handleFetch={handleFetch} />
      </div>
    </div>
  );
}

export default App;
