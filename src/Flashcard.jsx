import { useState } from "react";


function Flashcard({question,answer,deleteCard}){


const [showAnswer,setShowAnswer] = useState(false);



return(

<div className="card">


<div
onClick={()=>setShowAnswer(!showAnswer)}
>

<h2>
{
showAnswer ? answer : question
}
</h2>


<p>
Click card to flip
</p>

</div>


<button onClick={deleteCard}>
Delete
</button>


</div>

)

}


export default Flashcard;