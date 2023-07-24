import Greeting from './components/Greeting/Greeting'
import Message from './components/Message/Message'

export default function App (){
  let person = window.prompt('What is your name?')
return (
  <>
<Greeting name = {person}/>
<Message text = "Haha, Joker Royal Bank"/>
</>
)
}
