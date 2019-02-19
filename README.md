# CodingChallengeG9

This app was build as part of a coding challenge for an application to Group Nine Media.

Because I know the team is transitioning from one database type to a firebase backend, the app has two different paths for storing data.

1.  A postgres backend: curl requests to endpoints listed below will access and insert data into a relational database connected via heroku postgres add-on.

2.  A firebase backend: The front end utilizes a firebase backend. Made with react and redux,info added to the front end forms will insert data in the firebase console.
    Access to the console available upon request

To run tests:

<!-- // const videoDetails = {
//     name: 'titleSetBYYou',
//     brand: '',
//     storageReference: '',
//     primaryVideoCategory: '',
//     keywords: [],
//     publishedDate: Date.now(),
//     totalViews: 0,
//     viewHistory: []
//   }; -->
