const fs = require('fs');
// const axios = require('axios');
// const url = "https://api.merakilearn.org/courses"
// axios.get(url).then(resp =>{
//     var data = resp.data;        //converting into data
//     // console.log(data)
//     var putdata = JSON.stringify(data, null, 4);
//     fs.writeFileSync('whole_data.json', putdata);
// });


const fetch = JSON.parse(fs.readFileSync('whole_data.json'));
// console.log(fetch);
module.exports = fetch;