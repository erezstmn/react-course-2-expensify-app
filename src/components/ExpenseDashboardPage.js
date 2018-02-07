import React from 'react';
import ExpenseList from './ExpeneseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashoboardPage = () => (
    <div>
    <ExpensesSummary />
    <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashoboardPage;