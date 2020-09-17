const express = require('express');

const router = express.Router();

const itineraryController = require('../controllers/itineraryController.js');

// creating a new location in the locations table.
router.post(
  '/newLocation?user_id=',
  itineraryController.newLocation,
  (req, res) => {
    if (res.locals.success) {
      console.log('posted into db @ itineraryController');
      res.status(200).json(res.locals.newLocation);
    } else {
      res.status(200).send('My apologies, could not update database');
    }
  },
);

// router.post with that of /newActivity
// router.post('/newActivity', itineraryController., (req, res) => {
//   // info needed for new activity _id, location_id, user_id, link, notes, address, completed, description
//   console.log('new activity created in DB @ itineraryController');
//   res.status(200).json(res.locals);
// });


//router update update activity
//activities table columns: _id, location_id, user_id, link, notes, address, completed, description
//id is in params
router.put('/updateActivity',itineraryController.updateActivity, (req, res) => {
  //if res.locals.sucess is true then send the updatedActivity object back tot he client
  if(res.locals.sucess){
    res.status(200).json(res.locals.updatedActivity);
  } else {
    res.status(200).send('Sorry. Activity could not be updated at this time.');
  }
})

//router update location
router.put('/updateLocation', itineraryController.updateActivity,(req, res) => {
  res.sendStatus(200);

})

module.exports = router;
