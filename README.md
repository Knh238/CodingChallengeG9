# CodingChallengeG9

This app was build as part of a coding challenge for an application to Group Nine Media.

Because I know the team is transitioning from one database type to a firebase backend, the app has two different paths for storing data.

1.  A postgres backend: curl requests to endpoints listed below will access and insert data into a relational database connected via heroku postgres add-on.

2.  A firebase backend: The front end utilizes a firebase backend. Made with react and redux,info added to the front end forms will insert data in the firebase console.
    Access to the console available upon request
    firebase functionality
    run locally
    npm run start-dev
    http://localhost:8080/

To run tests:

heroku will allow you to make curl requests to specified endpoints
but most of the frontend functionality wont work because they require firebase login
POSTGRES ENDPOINT GUIDE

POST
a new video
https://kristin-g9m-coding.herokuapp.com/videos/
http://localhost:8080/videos/
request body:{"name":"test3","brand":"Thrillist","storageReference":"https://youtu.be/kHUz0Z_xFXw","primaryVideoCategory": "testing"}

response: {
"keywords": [],
"totalViews": 0,
"viewHistory": [],
"id": 1,
"name": "test3",
"brand": "Thrillist",
"storageReference": "https://youtu.be/kHUz0Z_xFXw",
"primaryVideoCategory": "testing",
"publishedDate": "2019-02-17T23:27:24.325Z",
"updatedAt": "2019-02-17T23:27:24.328Z",
"createdAt": "2019-02-17T23:27:24.328Z"
}

POST
a new view
https://kristin-g9m-coding.herokuapp.com/videos/view/
http://localhost:8080/videos/view/
request body:{ "videoId": 1,
"brand": "Thrillist",
"platform": "snapChat",
"user": "anonymous"
}

response: {
"newView": {
"id": 14,
"videoId": 1,
"brand": "Thrillist",
"platform": "snapChat",
"user": "anonymous",
"dateViewed": "2019-02-18T00:01:08.351Z",
"updatedAt": "2019-02-18T00:01:08.355Z",
"createdAt": "2019-02-18T00:01:08.355Z"
}
}

GET viewing report
https://kristin-g9m-coding.herokuapp.com/videos/videoId/report
http://localhost:8080/videos/videoId/report
response:{
"name": "test3",
"brand": "Thrillist",
"published": "2019-02-17T23:27:24.325Z",
"count": 14
}

GET video by id
https://kristin-g9m-coding.herokuapp.com/videos/videoId
http://localhost:8080/videos/videoId
response:{
"id": 1,
"name": "test3",
"brand": "Thrillist",
"storageReference": "https://youtu.be/kHUz0Z_xFXw",
"primaryVideoCategory": "testing",
"keywords": [],
"publishedDate": "2019-02-17T23:27:24.325Z",
"totalViews": 0,
"viewHistory": [],
"createdAt": "2019-02-17T23:27:24.328Z",
"updatedAt": "2019-02-17T23:27:24.328Z"
}

GET all videos
https://kristin-g9m-coding.herokuapp.com/videos/
http://localhost:8080/videos/
response: an array of videos currently in the database

GET all views of an individual video
https://kristin-g9m-coding.herokuapp.com/videos/videoId/views'
http://localhost:8080/videos/videoId/views'

response: an array of views associated with the video

GET the total number of views for an individual video
https://kristin-g9m-coding.herokuapp.com/videos/videoId/viewsTotal
http://localhost:8080/videos/videoId/viewsTotal'
response: {viewsTotal: 14}

FIREBASE ---front end when run locally will guide you in:
YOU must sign up and login with email (doesnt have to be real) and password to gain access to most features

creating a video
-click on the "+ video" button on the navbar
-enter the text required in the input fields
-select the brand
-this will create a new video in the database

creating and tracking a view
-click on the "watch" button on the navbar
-all the videos in the databse will be displayed on the page
-when you press play on a video listed in that component you will be creating and tracking a view
-the functions in the store will also update the total view count for the video on the video model

getting a view report
-click on the "views" button on the right of the navbar
-enter a video id in the textbox
note: users are unlikely to know a video id unless they have access to the firebase console --it is not -considered great practice to have firebase keys publically viewable
a report of the views based on the video data will appear below after you press submit

other functions available that are not currently implemented
-get video by id
-getVideoViews which returns all views associated with the video

preliminary sketches of postgres actions are also in the store under /actions/pgAlts

firebase functionality
run locally
npm run start-dev
http://localhost:8080/
