import '../../user.css'
import userData from "../../user.json";
import {Card} from "./Card"
//dada here, then applied to item component through props
function App() {
 return (
 <Card name={userData.name} age={userData.age} phoneNumber={userData.phoneNumber} address={userData.address}/> )
}

export default App
