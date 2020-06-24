
const mongoose = require('mongoose');

const User = require('./models/User');

const db = 'mongodb+srv://hellodb:2112@cluster0.pv9f6.mongodb.net/hellodb?retryWrites=true&w=majority';
// const db = 'mongodb://localhost/hellodb';

const users = [
{
id: 1,
name: 'Juan',
mail: 'juan@mail.com',
birthday: '2000-05-24'
},
{
id: 2,
name: 'Maria',
mail: 'maria@mail.com',
birthday: '2000-02-13'
},
{
id: 3,
name: 'Pedro',
mail: 'pedro@mail.com',
birthday: '2000-05-19'
},
{
id: 4,
name: 'Julia',
mail: 'julia@mail.com',
birthday: '1998-03-01'
}
];

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
.connect(db, { useNewUrlParser: true })
.then(() => {
console.log(`DB connected @ ${db}`);
console.log('Populating DB...');
User.insertMany(users, (err, users) => {
if (err) throw err;

console.log(`${users.length} documents inserted!`);

mongoose.connection.close();
});
})
.catch(err => console.error(`Connection error ${err}`));