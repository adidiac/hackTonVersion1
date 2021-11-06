import {useState, useSttate} from 'react'
import ChatBot from './Components/ChatBot';
import Home from './Components/Home'
import LoginParent from './Components/LoginParent';
import ParentPanel from './Components/ParentPanel';
function App() {

  const [user,setUser]=useState({type:"parent",logged:"yes"});
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

          }
          else
          {

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
