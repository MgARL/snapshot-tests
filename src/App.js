import './App.css';
import GitHubCard from './components/GitHubCard';
import {useEffect, useState} from 'react'


function App() {
  let [userInfo, setUserInfo] = useState(null)
  const url = 'https://api.github.com/users/MgARL'
  useEffect( async () => {
      let response = await fetch(url)
      let parsedRes = await response.json()

      setUserInfo(parsedRes)
  },[])
  
  return (
    <div className="App">
      {userInfo ? <GitHubCard  userInfo={userInfo}/> : null}
    </div>
  );
}

export default App;
