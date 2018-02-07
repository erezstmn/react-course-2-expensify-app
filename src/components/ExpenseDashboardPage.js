import React from 'react';
import ExpenseList from './ExpeneseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashoboardPage = () => (
    <div>
    <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashoboardPage;