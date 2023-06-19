const router = require("express").Router();
const subscriberController = require('../controllers/subscriberController');

router.get("/",(request, response) => {

    subscriber.subscribe('test');
    subscriber.on('message',(topic,message)=>{
      console.log(message.toString());
    })
  
    
  });

module.exports = router;
