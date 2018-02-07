import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should generate set text action object with default', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
});
test('should generate set text action object with given values', () =>{
    const action = setTextFilter('testing');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'testing'
    });
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

//by date
test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
// by amount
test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});
    