const Consumption = require('../models/consumption');
const subscriber = require('../config/connection');

const subscriber_get_all = (request, response) => {

  subscriber.subscribe('test');
  subscriber.on('message',(topic,message)=>{
    console.log(message.toString());
  })

  
}

module.exports ={
    subscriber_get_all
}