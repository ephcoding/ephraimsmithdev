---
title: 'REACT SPA: Tornado Action'
subtitle: 'Log 1: getting off the ground'
date: 'September 20, 2021'
author: 'Ephraim Smith'
keywords: 'tornado, severe weather, historical weather, heatmap, google maps'
description: ''
---

### WHAT AM I DOING

Like a lot of devs, I have a boneyard full of unfinished apps. Those projects you start with the intention of finishing over the weekend. But, eventually you find yourself in the repo settings with your tail between your legs changing the visibility to 'private'.

To get better results, I need a better way of holding myself accountable. The whole 'learning in public' thing is becoming pretty common so there's gotta be something to it. Let's give that a shot.

Here's my plan. All two steps.

1. Only build and maintain a couple BIG apps. This way I can focus on the tech instead of having to come up with new 'practice project' ideas. Decision fatigue and analysis paralysis are real. So, let's take them out of the equation.

2. Build them where a lot of eyes can see them. This speeds up the feedback loop. People love to argue and point out other people's 'mistakes'. Time to exploit that.

### WHY TORNADOES?

I'm not secretly trying to become a meteorologist. Fuck, I had to Google how to spell it. Tornadoes are cool though. And over the last couple years I noticed that government agencies have tons of free, open-source datasets.

### V1 FEATURES

Here's my initial list of features:

#### | Search Functionality

- a user can search for past tornado events by day, week, or month
- a user can filter tornado event results by intensity based on a tornado's MAX_SHEAR value (I'll get into the data in later posts)

#### | Data Visualization

- users can choose to see tornado locations as markers or their geographical concentration via heatmap
- users can see month over month or year over year tornado events on a bar graph

<figure>
  <img class='post-img' alt='Tornado Action heatmap' src='/images/posts/20210918__heatmap-screenshot.png'/>
  <figcaption class='text-center'>Heatmap of tornadoes with MAX_SHEAR > 100 knots for April 2021.</figcaption>
</figure>

#### | Real-Time Severe Weather Alerts

- display active thunderstorm and tornado alerts for user's current location

### GET MY MONEY'S WORTH

I want to ring Tornado Action out for as much as I can. Here's a list of concepts and technologies that I'm focusing on.

- using dependency injection
- React state management
- component composition
- design patterns
- TypeScript
- Amazon Web Services
- React Native
- serverless CI/CD & functions
- testing with Jest

### APIs / RESOURCES

Here's a couple of the huge datasets available I told you about earlier:

NASA | [dataset visualization](https://data.nasa.gov/data_visualizations.html)

NOAA | [data access](https://www.ncdc.noaa.gov/data-access)

#### | Severe Weather Data Inventory

Tornado signatures (events) are fetched from the [SWDI](https://www.ncdc.noaa.gov/severe-weather/severe-weather-data-inventory). The API is fed by a lot of different resources. Historical weather reports, NEXRAD (nex-gen radar), imagery. The list goes on.

The data's available in a few different formats too: json, geoJson, csv, xml, shp, & kmz.

SWDI API [docs](https://www.ncdc.noaa.gov/swdiws/)

<figure>
  <img class='post-img' alt='SWDI docs' src='/images/posts/20210916__swdi.png'/>
  <figcaption class='text-center'>Screenshot of Severe Weather Data Inventory API docs</figcaption>
</figure>

#### | National Weather Service API

You can access all active weather alerts through the National Weather Service [API Web Service](https://www.weather.gov/documentation/services-web-api#/default). All responses that contain geometry (coordinates) return GeoJson data by default.

API base URL | https://api.weather.gov

<figure>
  <img class='post-img' alt='National Weather Service API' src='/images/posts/20210916__nws-api-for-alerts.png'/>
  <figcaption class='text-center'>Screenshot of National Weather Service API page</figcaption>
</figure>

#### | Google Maps JS API

This is where the rubber meets the road. For now, I'm using the coordinates returned from the Severe Weather Data Inventory to plot map markers and feed the heatmaps. Eventually I want to try out the KMZ virtual globe format used a lot in Google Maps.

You'll be able to see in the code where I'm dynamically loading the API via the NPM package: [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader).

<figure>
  <img class='post-img' alt='Google Maps JS API' src='/images/posts/20210916__google-maps-js-api.png'/>
  <figcaption class='text-center'>Screenshot of Google Maps JS API page</figcaption>
</figure>

### SETUP / TECH

I spun up Tornado Action using create-react-app. Since V1's purely visual, there won't be any remote storage integrated. The plan is to come up with an excuse to use AWS S3 buckets with DynamoDB. You know, the buzzwords.

I normally write my own CSS but decided to roll with [react-bootstrap](https://react-bootstrap.github.io/) for Tornado Action. Trying to save some time.

#### | Dependencies

Here's the list of dependencies in addition to the create-react-app defaults:

- [@googlemaps/js-api-loader](https://www.npmjs.com/package/@googlemaps/js-api-loader) | lets you load the Google Maps API dynamically instead of inline in your HTML.
- [axios](https://www.npmjs.com/package/axios) | HTTP client based on Promises for hitting the APIs
- [bootstrap](https://www.npmjs.com/package/bootstrap) | mobile-first CSS framework
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) | Bootstrap React components
- [chart.js](https://www.npmjs.com/package/chartjs) | functional chart library built on HTML5 canvas
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2) | chart.js wrapped in React

#### | Dev Dependencies

- [Sass](https://www.npmjs.com/package/sass) | JS-compiled version of Sass CSS pre-processor

### FOLLOW PROGRESS

[tornadoaction.com](https://www.tornadoaction.com) is live if you want to follow the progress in real-time. Here's a couple upcoming tasks from my punch-list:

1. refactor component composition
1. add Jest unit tests
1. figure out how to cache maps to save on renders and requests
1. translate current web functionality into React Native version

You can also follow me on [Twitter](https://www.twitter.com/ephcoding) and see the code on [Github](https://github.com/ephcoding/app__tornado-action).

### WRAP IT UP

If you see something broken, misinterpreted, lacking in approach/design, or flat out fucked up, I want to know.

- Email | ephcoding@gmail.com
- GitHub | [ephcoding](https://www.github.com/ephcoding)
- LinkedIn | [ephraimjsmith](https://www.linkedin.com/in/ephraimjsmith)
- Twitter | [@ephcoding](https://www.twitter.com/ephcoding)
