import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render expenses summary with one expense', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multi expense', () =>{
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={1234567}/>);
    expect(wrapper).toMatchSnapshot();
});
