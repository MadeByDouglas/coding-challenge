# Data Collection Challenge

See the problem descriptioin below. The target time for this is 1-2 hours. Please note any assumptions you had to make to solve the problem in the readme attached to your git repo. Also include a link to the deployed solution.

## Problem Description

Modern vehicles are no longer isolated but rather part of a large inter-connected network constantly sharing live data. Because of this we need scalable systems to transmit observed data from cars, process it online, and then deliver relevant data to appropriate cars across the globe.

In this challenge, imagine fleets of cars observing road sign data as they drive around. These signs may include speed limit signs, passing restriction, merging, and more. We want to collect this data and then display appropriate upcoming signs to other drivers as they approach the area.

## Requirements

You must design a web server that receives sign observations, processes them, and then sends relevant results to a client web application (simulating the car)

### Web Server

- Built around the node.js framework
- A RESTful implementation
- Deploy to AWS, GCP, Heroku, or Azure

Construct a REST web service that is capable of receiving one observation at a time. The received observation shall be stored internally on the back-end server. Persistent storage of these observations is not required.

The web-service shall be used to provide vehicles with road signs for a given location. Since your fleet might report the same sign multiple time, it will send you multiple observations of the same sign. Thus, the observations need to be clustered before returning the result to the requestor. When requesting nearby signs, the vehicle shall be able to provide a latitude and longitude position together with a radius in which road signs shall be searched and returned.

You are provided with sample code that shows you a simple way of how to cluster sign observations. Feel free to use this code in your solution.

### Client

- Create a simple html/CSS/javascript implementation
- Use any 3rd party libraries you want to, list these in your readme file

Design and build a simple web app that can submit raw data to the server as well as display appropriate data from the server. You are free to design this however you like, it does not have to be super fancy but we are looking to see your visual design skills in addition to coding skills. Feel free to use any libraries you see fit, but something simple clean and readable is also totally fine.

The "admin panel" which submits data to the server will be built for you, please implement this code we have provided in your solution for consistency.

## Extras

You can add these features if you want, they are not required.

- Implement persistant storage on the server using a provider of your choice (mongoDB, couchDB, realm etc.)
- Implement a solution using graphQL; if you do this be sure to mention your approach in the readme
- Implement a web server using golang; tell us what makes it better or worse than node.js
- Build a mobile app instead of a web app to display the results. The mobile app does not need to be able to submit data to the server, just read data. Native iOS or Android implementation is encouraged rather than a web wrapper such as Ionic in this case.

## Submission

Send us a link to your git repo, it should have the following:

- A readme with an overview of your solution
- A link to the client application that is live and functional
