import './Expenses.css';

import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart'

import ExpensesFilter from './ExpenseFilter/ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';



function Expenses(props){
 

const [date, changeDate] = useState('2020');

const dateTransferHandler = (value) => {
    changeDate(value); 

}

const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === date;

});



    return(
        <div>
        
       <p>{date}</p>
        <Card className="expenses">
            <ExpensesFilter 
            dateToChild = {date} 
            dateTransfer = {dateTransferHandler}
            />
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList item = {filteredExpenses}/>
        </Card>
        
        
        </div>
    );
}
export default Expenses