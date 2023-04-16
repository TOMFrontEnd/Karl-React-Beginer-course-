import { useState, useEffect } from "react";1
import User from "./User";
function App() {
  const [users, setUser] = useState();
  //data changed all the time as the amount of data and downloading speed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      // first time forgot input the bracket after json. no results.
      .then((data) => {
        setUser(data);
      })
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      }); //all done function
  }, []);

  let jsx; // first time use blank let varible
  if (loading) {
    jsx = <h2>still loading</h2>;
  } else if (error!=null) {jsx=<h2> Error!</h2>}else {
    jsx = JSON.stringify(users); //json -> string
  }
  return (
    <div className="App">
      <h1> User List</h1>
      <ul>
      {users.map((user) =>{return( <li><User key={id} name={name}/> </li>)})}
      </ul>
      {jsx}  
     </div>
  );
}
// {jsx}is a good way to learn , so keep it here...
// not running properrly due to list writing has erros , need to watch video to walk through
export default App;
