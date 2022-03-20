https://softwareontheroad.com/ideal-nodejs-project-structure/?utm_source=reddit&utm_medium=subreddit#folder

src
│   app.js          # App entry point
└───api             # Express route controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff
└───jobs            # Jobs definitions for agenda.js
└───loaders         # Split the startup process into modules
└───models          # Database models
└───services        # All the business logic is here
└───subscribers     # Event handlers for async task
└───types           # Type declaration files (d.ts) for Typescript


News API:
[NYTimes](https://developer.nytimes.com)
[NewsApi](https://newsapi.org/docs)
[gNews](https://gnews.io/docs/v4)

References:
[RapidAPI](https://rapidapi.com/blog/rapidapi-featured-news-apis/)
