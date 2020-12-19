import React from 'react';
import './App.css';
import Grid from './grid';
function App() {

  //let repo = useContext(repos);
  // const [repos,setRepos] = useState([{}]);
  // useEffect(()=>{

  //  async function fetchapi(){
  //       const api=await fetch('https://api.github.com/users/haris-nabeel/repos').then(res=>res.json());
  //       console.log(api);
  //       setRepos(api);
  //   }
  //   fetchapi();
    
  // },[])
  return (
    <div className="App">
    {/* <h1>{repo.map((repoObj,ind)=>{
      return(
        <li key={ind}>
          {repoObj}
        </li>
      )
    })}</h1> */}
    <Grid/>
  
    </div>
  );
}

export default App;
