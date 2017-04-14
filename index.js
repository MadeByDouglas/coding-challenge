var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

//var yallist = require('yallist');
var LinkedList = require('linked-list');

var clustering = require('density-clustering');

var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    
    
    // display variables

    var stuff = "hello there"
    
    
    
    res.render('pages/index', {
        stuff: stuff
    });
});

app.set('port', (process.env.PORT || 5000));


//graphQL schema


// schema.js

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

//let count = 0;
//
//let schema = new GraphQLSchema({
//  query: new GraphQLObjectType({
//    name: 'RootQueryType',
//    fields: {
//      count: {
//        type: GraphQLInt,
//        resolve: function() {
//          return count;
//        }
//      }
//    }
//  })
//});

//graphQL

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

//app.post('/graphql', function(req, res) {
//    res.send('Hello');
//    
//    graphql(schema, req.body)
//    
//    .then(function(res) {
//        res.send(JSON.stringify(res, null, 2));
//    })
//    
//});

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:5000/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

router.route('/items')
    
    .post(function(req, res) {
            
        res.json({ message: 'Hello ' + req.body.name });

    })

    .get(function(req, res) {
    
        res.json({ message: 'All the things' });

    })

router.route('/items/:item_id')

    .get(function(req, res) {
    
        res.json({ message: 'Item ID: ' + req.params.item_id });

    })

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



// start server

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



/*
 This example code shows you how to perform a clustering of geographical points
 given by latitude, longitude and heading with apache commons math.
 
 Feel free to use this code to complete your assignment. If you want to use another way
 of clustering feel free to do so, this is just intended to be a help since clustering
 methods are not the focus of this assignment.
 */

function clusteringExampleWDistance(observations) {
    //Example Cluster 1

    //48.145779, 11.576805, 10
    //48.145761, 11.576684, 11
    //48.145736, 11.576858, 12

    //Example Cluster 2
    //48.145205, 11.579957, 13
    //48.145207, 11.579834, 14	
    //48.145160, 11.579890, 15

    //Example Cluster 3
    //48.144920, 11.580338, 170

    //Let's construct some observations from the above clusters to test our algorithm
    
    
    var item1 = (48.145779, 11.576805, 10);
    var item2 = (48.145761, 11.576684, 11);
    var item3 = (48.145736, 11.576858, 12);
    var item4 = (48.145205, 11.579957, 13);
    var item5 = (48.145207, 11.579834, 14);
    var item6 = (48.145160, 11.579890, 15);
    var item7 = (48.144920, 11.580338, 170);

    
    var list = new LinkedList(item1, item2, item3, item4, item5, item6, item7);
    

    //DBScan Epsilon Neighbourhood - 100m should be generous enough. 
    var epsilonNeighbourhood = 0.1;
    //We set minPts to 0 to allow clusters of single points.
    var minPts = 0;

    /*
     * execute clustering - we use DBScan here as a very simple density based clustering
     * algorithm that does not require the number of desired clusters as an input
     */
    
    var dbscan = new clustering.DBSCAN();
    var clusters = dbscan.run(dataset, epsilonNeighbourhood, minPts);
    console.log(clusters, dbscan.noise);
}

