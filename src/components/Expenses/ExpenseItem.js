import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
//Usestate() must be used inside the component, but not in a nested function.
 

    return (
    <Card className="expense-item">
        
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
       
    </Card>
 
    );    
}


export default ExpenseItem;
