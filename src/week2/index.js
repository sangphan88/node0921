
let prompt = require('prompt');

let prompt_atts = [
    {
        name: 'username',
        validator: /^[a-zA-Z\s-]+$/,  
        warning: 'User name not valid, just put letters',
    },
    {
        name: 'age',
        validator: /^([0-9])/,
        warning: 'wrong input birth, contain number',
    },
    {
        name: 'district'
    }
];

prompt.start();
prompt.get(prompt_atts, function(err, result) {
    if (err) {
        console.log('err');
        return 1;
    } else {
        console.log('Thank you. Hello ' + result.username + ', so you are ' + result.age + ' year old and from ' + result.district + '.');
    }
});