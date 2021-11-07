import {useState, useSttate} from 'react'
import ChatBot from './Components/ChatBot';
import Home from './Components/Home'
import LoginParent from './Components/LoginParent';
import ParentPanel from './Components/ParentPanel';
import ObesityPrediction from './Components/ParentScreen/ObesityPrediction';
import SentimentAnalysis from './Components/ParentScreen/SentimentAnalysis';
function App() {

  const [user,setUser]=useState("");
  const [screenParent,setScreenParent]=useState();
  const render=()=>{
    if(user)
    {
    if(user.type=="parent")
    {
      if(user.logged=="yes")
      {
        if(screenParent)
        {
          if(screenParent=="obesity")
          {
              return <ObesityPrediction setScreenParent={setScreenParent}></ObesityPrediction>;
          }
          else
          {
            return <SentimentAnalysis setScreenParent={setScreenParent}></SentimentAnalysis>
          }
        }
        else
          return <ParentPanel  setUser={setUser} user={user} setScreenParent={setScreenParent}></ParentPanel>
      }
      else
      {
        return <LoginParent setUser={setUser} user={user}></LoginParent>
      }
    }
    if(user.type=="child")
    {
        return <ChatBot  setUser={setUser} user={user}></ChatBot>
    }
    }else{
        return <Home setUser={setUser} user={user}></Home>
    }
  }

  return (
    <div className="App">
      {
        render()
      }
    </div>
  );
}

export default App;
