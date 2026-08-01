import {useState} from "react";


function AddCardForm({addCard}){


const [question,setQuestion]=useState("");
const [answer,setAnswer]=useState("");



function handleSubmit(e){

e.preventDefault();


addCard({
question,
answer
});


setQuestion("");
setAnswer("");

}



return(

<form onSubmit={handleSubmit}>


<input

placeholder="Question"

value={question}

onChange={(e)=>setQuestion(e.target.value)}

/>



<input

placeholder="Answer"

value={answer}

onChange={(e)=>setAnswer(e.target.value)}

/>



<button>
Add Flashcard
</button>


</form>

)

}


export default AddCardForm;