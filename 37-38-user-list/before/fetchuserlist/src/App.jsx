import { useState, useEffect } from "react";1
import {User} from "./User";
// User forgot bracket
function App() {
  const [users, setUsers] = useState();
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
      .then(data=>setUsers(data))
      // or use .then(setUsers) same effect
      .catch((e) => setError(e))
      .finally(() => {
        setLoading(false);
      }); //all done function
  }, []);

  let jsx; // first time use blank let varible
  if (loading) {
    return <h2>still loading</h2>;
  } else if (error!=null) { return <h2> Error!</h2>}else {
  //   jsx = JSON.stringify(users); //json -> string
  // }
  return (
    <>
      <h1> User List</h1>
      <ul>
      {users.map(user =>{return(<User key={user.id} name={user.name}/> )})}
      </ul>
      </>
  )
}
}
// {jsx}is a good way to learn , so keep it here...
// not running properrly due to list writing has erros , need to watch video to walk through
// now it's passed, users, setUser mistake. should match. also, didnt use fetch signal just noted here.
export default App;
