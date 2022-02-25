const fetched_data = require('../fetch_merakiData')
// console.log(data)

const options = {
    client : 'mysql',
    connection :{
        host : 'localhost',
        user : 'root',
        password : 'Kavi@123',
        database : 'course'
    }
}
const knex = require('knex')(options);

knex.schema.createTable('Meraki_courses', (table)=>{
    table.increments('id').primary();
    table.string('name');
    table.string('logo');
    table.string('notes');
    table.integer('days_to_complete');
    table.string('short_description');
    table.string('type');
    table.string('course_type');
    table.string('lang_available');
})
.then(()=>{
    console.log('Table created..!');
}).catch((err)=>{
    console.log('Table already exist..!');
})




let ins = fetched_data.map((Data)=>{
    Data.lang_available = Data.lang_available.join(",")
    return Data
})
// console.log(ins);

knex('Meraki_courses').insert(ins).then(()=>{
    console.log('Data Inserted')
})
.catch((err) => { 
    console.log('Data already inserted')
});



module.exports = knex;