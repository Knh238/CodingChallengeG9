# CodingChallengeG9

Kristin Harper

This app was build as part of a coding challenge for an application to Group Nine Media.

Because I know the team is transitioning from one database type to another, the app has two different paths for storing data.

\*\*NOTE: THE DATA is NOT IDENTICAL in the two databases.It is structured similarly but key nameing process etc differ. So postgres may have a video with the id of 1, but firebase will not.\*\*

1.  A postgres backend: curl requests to endpoints listed below will access and insert data into a postgres database connected via heroku postgres add-on.
    either to endpoints off of the main site: https://kristin-g9m-coding.herokuapp.com/
    -You can also run locally \* npm run start-dev
    http://localhost:8080/

    * See: POSTGRES ENDPOINT GUIDE below

2.  A firebase backend: Made with react and redux,info added to the front end forms will insert data into the firebase console.
    https://kristin-g9m-coding.herokuapp.com/
    --Access to firebase console available upon request
    https://kristin-g9m-coding.herokuapp.com/
    -You can also run locally

    * npm run start-dev
      http://localhost:8080/

      * See: FIREBASE INTERACTION GUIDE below

To run tests:
npm run test

\***\*\*\*\*\***\*\*\***\*\*\*\*\***POSTGRES ENDPOINT GUIDE\***\*\*\*\*\***\*\*\***\*\*\*\*\***
\*POST
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

\*POST
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

\*GET
a viewing report
https://kristin-g9m-coding.herokuapp.com/videos/videoId/report
http://localhost:8080/videos/videoId/report
response:{
"name": "test3",
"brand": "Thrillist",
"published": "2019-02-17T23:27:24.325Z",
"count": 14
}

\*GET
video by id
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

\*GET
all videos
https://kristin-g9m-coding.herokuapp.com/videos/
http://localhost:8080/videos/
response: an array of videos currently in the database

\*GET
all views of an individual video
https://kristin-g9m-coding.herokuapp.com/videos/videoId/views'
http://localhost:8080/videos/videoId/views'

response: an array of views associated with the video

\*GET
the total number of views for an individual video
https://kristin-g9m-coding.herokuapp.com/videos/videoId/viewsTotal
http://localhost:8080/videos/videoId/viewsTotal'
response: {viewsTotal: 14}

**\*\*\*\***\***\*\*\*\***FIREBASE/HEROKU GUIDE \***\*\*\*\*\***\*\*\***\*\*\*\*\***

https://kristin-g9m-coding.herokuapp.com/
-open the site listed above in your browser
-YOU must sign up and login with an EMAIL (doesnt have to be real) and PASSWORD
to gain access to most features
-while you will be able to view videos it will not track these views unless you are logged in
--IF you have the appropriate config file, you could also run this locally with npm run start

\*creating a video
-click on the "+ video" button on the navbar
-enter the text required in the input fields
-select the brand
-this will create a new video in the database

\*creating and tracking a view
-click on the "watch" button on the navbar
-all the videos in the databse will be displayed on the page
-when you press play on a video listed in that component you will be creating and tracking a view
-the functions in the store will also update the total view count for the video on the video model

\*getting a view report
-click on the "views" button on the right of the navbar
-enter a video id in the textbox
note: users are unlikely to know a video id unless they have access to the firebase console --it is not considered great practice to have firebase keys publically viewable
-you can test with the following: '-LZ1OjJH-qAoJhKHEdYx','-LZ2XOb7XoY1srF1I5Jt'
-a report of the views based on the video data will appear below after you press submit

\*other functions available that are not currently implemented
-get video by id
-getVideoViews which returns all views associated with the video
-early phases of keyword search and access sketched out in places

\*preliminary sketches of postgres actions are also in the store under ./actions/pgAlts
