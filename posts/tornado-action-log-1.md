---
title: 'REACT SPA: Tornado Action'
subtitle: 'Log 1: getting off the ground'
date: 'September 13, 2021'
author: 'Ephraim Smith'
keywords: 'tornado severe weather historical weather heatmap google maps'
description: ''
---

### WHAT AM I DONG

Alright. So, a few months ago I left my full-time gig as a QA Engineer to focus on getting my first dev job. I know. 'Crazy'. 'Dumb'. Whatever. But you'd be amazed at how much can get accomplished when you're not chasing dangled carrots everyday;)

The last few months have been awesome. I've been learning about business, physical AND mental fitness, algo-trading, spending wayyy more time with the family, and going deep in **JavaScript** and **React** / **React Native**. But now it's time to go back to getting paid to learn.

Unfortunately, like a lot of devs I have a boneyard full of unfinished apps (aka: private repos). Mainly because I quickly lose interest in practice or tutorial projects. Yes, writing code is the only way to get good at writing code. But for me, that code has to be more than just an exercise. It has to serve a real purpose or solve a real problem, preferably for me:) With that in mind I'm taking a new approach moving forward. Full-scale, full-stack apps only. For this first one I'm building both web and native mobile versions. (want to get some more 1-on-1 time with React) After this project, it's gonna be all React Native.

If you work out or have ever played sports, you've heard the phrase 'it\'s all about the reps.' Painful, meaningful reps. If I start designing, developing, and deploying full-scale apps over and over again, I'm either going to get hired or start making my own money. _( ..as long as the funds don't run out first:P )_

### WHY TORNADOES?

I'm not a weather 'nut' or wannabe meteoroligist (<-- had to Google how to even spell it) so why Tornadoes? Because despite the former, tornadoes are badass and there are tons of publicly-available weather-related web services. (Bonus: http proxy hacks need not apply as most of them allow cross-origin requests)

The original high-level purpose of this project was to simply demo my ability to consume an API and display it in a 'non-visually-offensive' way with React.

### V1 FEATURES

#### | Search Functionality

- users can search for past tornado events by day, week, or month
- user can filter tornado event results by intensity based on a tornado's MAX_SHEAR value

#### | Data Visualization

- user can choose to see the locations plotted as a Google Maps heatmap or markers

<figure>
  <img class='post-img' alt='Tornado Action heatmap' src='/images/posts/20210918__heatmap-screenshot.png'/>
  <figcaption class='text-center'>Heatmap of tornadoes with MAX_SHEAR > 100 knots for April 2021.</figcaption>
</figure>

#### | Real-Time Severe Weather Alerts

- fixed component that displays active thunderstorm and tornado alerts for user's current location

### RINGIN' IT OUT

I want to get as much as I can out of Tornado Action so I made a list of concepts and technologies that I want to get some working experience with. The list is already too long and I have another list of stuff to add already. Shoot for the starts, hit the moon?

- implement dependency injection to make testing easier
- minimize state management overhead by leveraging React as much as possible
- improving component composition
- better use of design patterns
- TypeScript integration
- data management with AWS
- using React Native
- serverless data processes
- testing with Jest

### APIs / RESOURCES

Like I said, crazy amounts of data available. Here's a taste:

NASA | [dataset visualization](https://data.nasa.gov/data_visualizations.html)

NOAA | [data access](https://www.ncdc.noaa.gov/data-access)

Here's what I'm using initially. We'll see what else gets added to the list.

#### | Severe Weather Data Inventory

Tornado signatures are fetched from the [SWDI](https://www.ncdc.noaa.gov/severe-weather/severe-weather-data-inventory) which acts as a single point of access to data from various resources. You're able to pull signatures (event-specific data) for hail, storms, and tornadoes. Storm reports and warnings are also available.

Data comes in different formats too: json, geoJson, csv, xml, shp, & kmz.

SWDI [docs](https://www.ncdc.noaa.gov/swdiws/)

<figure>
  <img class='post-img' alt='SWDI docs' src='/images/posts/20210916__swdi.png'/>
  <figcaption class='text-center'>Screenshot of Severe Weather Data Inventory API docs</figcaption>
</figure>

#### | National Weather Service Alerts

Active severe weather alerts are accessed through the NWS [API Web Service](https://www.weather.gov/documentation/services-web-api#/default) All responses that contain geometry (coordinates) return GeoJson data by default.

API base URL | https://api.weather.gov

<figure>
  <img class='post-img' alt='National Weather Service API' src='/images/posts/20210916__nws-api-for-alerts.png'/>
  <figcaption class='text-center'>Screenshot of National Weather Service API page</figcaption>
</figure>

#### | Google Maps JS API

This is where the rubber meets the road. For now, I'm using the coordinates returned from the Severe Weather Data Inventory to plot map markers and feed the heatmaps. Eventually I want to test ride using the KMZ virtual globe format.

You'll be able to see in the code where I'm dynamically loading the API via the NPM package: [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader). I'll dive deeper into the Loader class in the next project log post.

<figure>
  <img class='post-img' alt='Google Maps JS API' src='/images/posts/20210916__google-maps-js-api.png'/>
  <figcaption class='text-center'>Screenshot of Google Maps JS API page</figcaption>
</figure>

### SETUP / TECH

I spun up Tornado Action using create-react-app. Since V1's purely visual, there won't be any remote storage integrated. The plan is to come up with an excuse to use AWS S3 buckets with DynamoDB. You know, the buzzwords.

I normally write my own CSS but decided to roll with [react-bootstrap](https://react-bootstrap.github.io/) instead. It's a time thing.

#### | Dependencies

Here's the list of dependencies (beyond default CRA dependencies) as they sit right meow:

- [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader) | lets you load the Google Maps API dynamically instead of inline in your HTML.
- [axios](https://www.npmjs.com/package/axios) | HTTP client based on Promises for hitting the APIs
- [bootstrap](https://www.npmjs.com/package/bootstrap) | mobile-first CSS framework
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) | Bootstrap React components
- [chart.js](https://www.npmjs.com/package/chartjs) | functional chart library built on HTML5 canvas
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) | chart.js wrapped in React

#### | Dev Dependencies

- [Sass](https://www.npmjs.com/package/sass) | JS-compiled version of Sass CSS pre-processer

### FOLLOW PROGRESS

[tornadoaction.com](https://www.tornadoaction.com) is live if you want to follow the progress in real-time. These are just a few of the many punch-list items I'll be starting on over the next couple days:

1. refactor component composition
1. add Jest unit tests
1. figure out how to cache maps to save on renders and requests
1. translate current web functionality into React Native version

You can also check for updates on [Twitter](https://www.twitter.com/ephcoding) or check out the code on [Github](https://github.com/ephcoding/app__tornado-action).

### WRAP IT UP

I'm doing this whole learn-in-public thing so I can build apps of value as soon as possible. If you see something broken, misinterpreted, lacking in approach/design, or flat out fucked up, I want to know. If you made it this far, thank you and congratulations. You've earned yourself a drink.

- Email | ephcoding@gmail.com
- GitHub | [ephcoding](https://www.github.com/ephcoding)
- LinkedIn | [ephraimjsmith](https://www.linkedin.com/in/ephraimjsmith)
- Twitter | [@ephcoding](https://www.twitter.com/ephcoding)
