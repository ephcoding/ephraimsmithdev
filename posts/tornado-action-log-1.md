---
title: 'REACT SPA: Tornado Action'
subtitle: 'Log 1: getting off the ground'
date: 'September 13, 2021'
author: 'Ephraim Smith'
keywords: 'tornado severe weather historical weather heatmap google maps'
description: ''
---

### WHAT ARE YOU DOING

Like a lot of devs, I have a boneyard full of unfinished apps (aka: private repos). Mainly because I've always struggled with the idea of 'practice projects.' If I'm not personally invested in an idea, I won't finish it. Time is way too valuable.

There's a time and place for tutorials and smaller projects. Especially, when you're brand new to code. The compartmentalization of concepts is important in maintaining forward momentum. But I'm not brand new to code anymore, and I'm trying to land my first Developer role.

Employers don't want to see another To-Do list or vending machine anymore than I want to build one. Thankfully I learn better, and faster, when I'm a little overwhelmed. So my new approach to building and demonstrating my chops is to only build fullstack apps that get treated as stand-alone businesses. I know it might seem like a big jump, but my thought is this:

..muscle-memory comes from reps. If I focus on designing, developing, and deploying full-scale apps over and over again, I'm either going to get hired or start making my own money. _( unless I run out of money first:P )_

### WHY TORNADOES?

I'm not a weather 'nut' or wannabe meteoroligist (had to Google just how to spell it) so why Tornadoes? Because despite the former, tornadoes are still badass and there are tons of publicly-available weather-related web services. (Bonus: http proxy hacks need not apply as most of them allow cross-origin requests) **_STAY TUNED:_** I'm going to build out a list of cool APIs I come across.

The original high-level purpose of this project was to demonstrate my ability to consume API data and display it in a non-visually-offensive way with React. As with most of my projects, I decided to go full-tilt right out of the gate.

..oh yea, making a React Native version too.

### FOCUS AREAS RAPID FIRE

These are the concepts and approches I'm making a point to hone in on. The list is already too long but 'shoot for the stars hit the moon' yea?

- implement dependency injection to make testing easier
- minimize state management overhead by leveraging React as much as possible
- improving component composition
- better use of design patterns
- TypeScript integration
- data management with AWS
- using React Native
- serverless data processes
- testing with Jest

### V1 FEATURES

#### _User Search Functionality_

- users can search for past tornado events by day, week, or month
- user can filter tornado event results by intensity based on a tornado's MAX_SHEAR reading

#### _Data Visualization_

- user can choose to see the locations plotted as a Google Maps heatmap or standard map with markers

#### _Real-Time Severe Weather Alerts_

- fixed component that displays active thunderstorm and tornado alerts for user's current location

### APIs / RESOURCES

Like I said, crazy amounts of data available. Here's a taste:

NASA | [dataset visualization](https://data.nasa.gov/data_visualizations.html)

NOAA | [data access](https://www.ncdc.noaa.gov/data-access)

Here's what I'm using initially. We'll see what else gets added to the list.

#### _Severe Weather Data Inventory_

<!-- ![Severe Weather Data Inventory API](/images/posts/20210916__swdi.png) -->

<div class='d-flex'>
  <p>
  Tornado signatures are fetched from the <a href='https://www.ncdc.noaa.gov/severe-weather/severe-weather-data-inventory')>SWDI</a> which acts as a single point of access to data from various resources. You're able to pull signatures (event-specific data) for hail, storms, and tornadoes. Storm reports and warnings are also available.
  </p>
  <img class='post-img' alt='SWDI docs' src='/images/posts/20210916__swdi.png'/>
</div>

Data comes in different formats too: [json](https://www.json.org/json-en.html), [geoJson](https://geojson.org/), csv, xml, shp, & [kmz](https://developers.google.com/kml/documentation/kmzarchives).

API [docs](https://www.ncdc.noaa.gov/swdiws/)

#### _National Weather Service Alerts_

![National Weather Service API](/images/posts/20210916__nws-api-for-alerts.png)

Active severe weather alerts are accessed through the NWS [API Web Service](https://www.weather.gov/documentation/services-web-api#/default). All responses that contain geometry (coordinates) return GeoJson data by default.

API base URL | https://api.weather.gov

#### _Google Maps JS API_

![Google Maps JS API](/images/posts/20210916__google-maps-js-api.png)

This is where the rubber meets the road. For now, I'm using the coordinates returned from the Severe Weather Data Inventory to plot map markers and feed the heatmaps. Eventually I want to test ride using the KMZ virtual globe format.

You'll be able to see in the code where I'm dynamically loading the API via the NPM package: [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader). I'll dive deeper into the Loader class in the next project log post.

### SETUP / TECH

Tornado Action was created as a simple CRA app. Since V1's purely visual, there won't be any remote storage integrated. The plan is to come up with an excuse to use AWS S3 buckets with DynamoDB and Lambda functions. You know, the buzzwords.

I normally write my own CSS but it's too easy, and likely, to get caught up in it that I went with [react-bootstrap](https://react-bootstrap.github.io/). It's a time thing.

So here's the list of dependencies (beyond default CRA dependencies) as they sit right meow:

#### _Dependencies_

- [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader) | lets you load the Google Maps API dynamically instead of inline in your HTML.
- [axios](https://www.npmjs.com/package/axios) | HTTP client based on Promises for hitting the APIs
- [bootstrap](https://www.npmjs.com/package/bootstrap) | mobile-first CSS framework
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) | Bootstrap React components
- [chart.js](https://www.npmjs.com/package/chartjs) | functional chart library built on HTML5 canvas
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) | chart.js wrapped in React

#### _Dev Dependencies_

- [Sass](https://www.npmjs.com/package/sass) | JS-compiled version of Sass CSS pre-processer

### FOLLOW PROGRESS

I'll have the web version pushed by tonight so everyone can follow in real time. It's fugly and the punch list is already a mile long. Here's what I'll be attacking next:

1. refactor component composition (to make my life easier when I get to #2)
1. add Jest unit tests
1. figure out how to cache maps to save on renders and requests
1. translate current web functionality into React Native version

If you want to follow Tornado Action's progress you have a few options.

- tornadoaction.com
- github.com/ephcoding/app\_\_tornado-action
- twitter.com/ephcoding
  - \#tornadoaction

### WRAP IT UP

I'm doing this whole learn-in-public thing so I can build apps of value as soon as possible. If you see something broken, misinterpreted, lacking in approach/design, or flat out fucked up, I want to know. If you made it this far, thank you and congratulations. You've earned yourself a drink.

- Email | ephcoding@gmail.com
- GitHub | [ephcoding](https://www.github.com/ephcoding)
- LinkedIn | [ephraimjsmith](https://www.linkedin.com/in/ephraimjsmith)
- Twitter | [@ephcoding](https://www.twitter.com/ephcoding)
