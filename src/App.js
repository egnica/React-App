
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Greet from "./components/Greet";
import { useState } from "react";


const DUMMY_EXPENSES = [

  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
const [showButton, ChangeShowButton] = useState(false);

const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses ) => {
      return [expense, ...prevExpenses]
  });
};

 let textFunction = () => {
    let text = "add some text";
    return text;
  }
  const FormButtonHandler = (event) => {
      console.log(event)
      ChangeShowButton('true')
  }


  return (
    <div className="contain">
      
      <Greet nameFirst={namesArray[0]} nameLast={lastNameArray[0]}/>
      <Greet nameFirst={namesArray[1]} nameLast={lastNameArray[1]}/>
      <Greet nameFirst={namesArray[2]} nameLast={lastNameArray[2]}/>

      <h2 className = "test">Hello World</h2>


      <p>{textFunction()}</p>
      { !showButton &&
      <div className='new-expense'>
      <button onClick = {FormButtonHandler}> See Form</button>
      </div>
      }
      { showButton &&
      <NewExpense onAddExpense={addExpenseHandler}/>
      }
      <Expenses items={expenses}/>

{/*  <inputItem/>
     This is commented out
*/}
      <div>
      <h2>First Form -- Output saved to console and pushed to an object</h2>
      <textarea className = "text-area"></textarea>
      <button onClick={eventClick}>Click</button>
    
      </div>
      
    </div>
  );
 
  


}
let eventClick = function(){
  let textTestFunction =document.querySelector(".text-area").value;
  
    textArray.push({item: textTestFunction});
    console.log(textTestFunction);
    console.log(textArray);
}




const textArray = [];




const namesArray = ['Mike', 'Nick', 'Matt'];
const lastNameArray = ['Thompson', 'Wagner', 'Mitchel'];



export default App;
