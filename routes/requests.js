var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET request listing. */
// router.get('/', (req, res) => {
//   res.send('respond with a resource');
// });
//after res on line 6 actually ada ,next but removed 

// GET requests list
const getRequests = (req, res) => {
  db("SELECT * FROM requests ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
};
router.get("/", function(req, res, next) {
  db("SELECT * FROM requests ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one request
router.get("/:id", function(req, res, next) {
  //your code here
  db(`SELECT * FROM requests where id = ${req.params.id}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// INSERT a new request into the DB
router.post("/", function(req, res, next) {
  console.log(req.body);
  db(
    `INSERT INTO requests (name, address, hp, servicetype, timeslot, dateslot) VALUES ("${req.body.name}", "${req.body.address}","${req.body.hp}", "${req.body.servicetype}","${req.body.timeslot}","${req.body.dateslot}")`
  )
    .then(() => {
      getRequests(req, res);
    })
    .catch(err => res.status(500).send(err));

  });

router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM requests where id = ${req.params.id}`)
    .then(() => {
      getRequests(req, res);
    // res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
  //console.log(`INSERT INTO requests (name, address, hp, servicetype, timeslot) VALUES ("${req.body.name}", "${req.body.address}","${req.body.hp}", "${req.body.servicetype}","${req.body.timeslot}")`)
});

module.exports = router;
