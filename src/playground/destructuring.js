// console.log('destructor')

// const person = {
//     name: 'Erez',
//     age: 32,
//     location: {
//         city: 'Tel-aviv',
//         temp: 16
//     }
// };

// console.log(person.age);

//const book = {
    // title: 'Ego is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
       // name: 'Penguin'
//    }
//};

//const {name: publisherName = 'Self-Published'} = book.publisher;
//console.log(publisherName);

const item = ['Coffee (hot)','2.00', '2.50', '3.00'];

const [type, small, medium, large] = item;
console.log(`Medium ${type} costs ${medium}`);