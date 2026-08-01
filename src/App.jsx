import { useState } from "react";
import Flashcard from "./Flashcard";
import AddCardForm from "./AddCardForm";
import "./App.css";


function App(){

const [cards,setCards] = useState([
{
question:"What is React?",
answer:"A JavaScript library for building user interfaces"
},
{
question:"What does useState do?",
answer:"It stores changing data in components"
}
]);


function addCard(newCard){

setCards([...cards,newCard]);

}


function deleteCard(index){

const updatedCards = cards.filter((_,i)=>i !== index);

setCards(updatedCards);

}



return(

<div className="app">

<h1>📚 Study Flashcard App</h1>


<AddCardForm addCard={addCard}/>


<div className="cards">

{
cards.map((card,index)=>(

<Flashcard
key={index}
question={card.question}
answer={card.answer}
deleteCard={()=>deleteCard(index)}
/>

))
}

</div>


</div>

)

}


export default App;