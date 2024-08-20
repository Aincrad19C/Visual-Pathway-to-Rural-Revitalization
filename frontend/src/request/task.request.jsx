import * as axios from 'axios';

const client = axios.default;

client.get('http://146.56.205.18:7001').then((response) => {
    console.log(response);
})

client.post('http://backend:7001/task/create', {
    name:"界面",
    description:"设计界面"
},
    {
        headers: {
            'Content-Type':'application/json'
        }
    }
).then((response) => {
    console.log(response);
})