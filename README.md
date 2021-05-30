<div align="center">

<!-- HEADER SECTION -->

<img src="assets/pokino_header.png" width="800px">

**Software project for Advanced Software Engineering :hammer: :construction_worker: course at 
<a href="https://uzh.ch/"><img src="assets/uzh_logo_no_text.png" width="15px"></a>**

---

<!-- LINKS SECTION -->
<p align="center">
  <a href="http://34.65.96.186:4200/34.65.96.186/">Play it here</a>
</p>

<!-- BATCHES SECTION -->
[![Build Status](https://travis-ci.com/pokino-land/pokino.svg?branch=main)](https://travis-ci.com/pokino-land/pokino)
[![codecov](https://img.shields.io/codecov/c/github/pokino-land/pokino?label=test%20coverage&token=444585811d48493abd0d6c7efe228d2a)](https://app.codecov.io/gh/pokino-land/pokino/)
[![dockerhub](https://img.shields.io/badge/docker%20hub-registry-blue)](https://hub.docker.com/repository/docker/matthaeusheer/pokino-game)
[![swagger](https://img.shields.io/badge/swagger-api-yellowgreen)](https://app.swaggerhub.com/apis/matthaeusheer/pokino_api/1.0.0)
[![documentation](https://img.shields.io/badge/official-documentation-brightgreen)](https://github.com/pokino-land/pokino/wiki/Pokino-Documentation)
  

</div> <!-- centering -->

<p align="center">
  <img width="700" src="assets/game_play.gif">
</p>

# :video_game: How To Use
[Play it here](http://34.65.96.186:4200/34.65.96.186/). The application is hosted for you with :heart: on
<a href="https://cloud.google.com/"><img src="assets/gcp.png" width="16px"></a>.

# :clipboard: Install Guide
This guide describes how to install the application for development purposes.

## Variant 1 :hugs: - Pull pre-built docker images and run locally
0) Make sure the [docker](https://docs.docker.com/) :whale: engine incl. docker-compose is installed on your system.
1) Download our docker-compose.yml file to pull the images from our public docker hub registry & Run the services with
   ```
   docker-compose up
   ```

## Variant 2 :roll_eyes: - Build & run docker containers locally
0) Make sure the [docker](https://docs.docker.com/) :whale: engine incl. docker-compose is installed on your system.
1) Clone this repo:  
   ```
    git clone https://github.com/pokino-land/pokino.git
   ```
2) Build the services locally and run the services  
   ```
   docker-compose build  
   docker-compose up
   ```

## Variant 3 :dizzy_face: - Run everything locally outside of docker
**Not recommended!**  
_Disclaimer_: This requires manual setup and installation of numerous dependencies!  
0) Make sure to install all dependencies (java 11 sdk, angular, npm, ...)
1) Backend: Run services in your IDE or build the maven projects and run with the maven wrapper.
2) Frontend: Start the angular application.

# :cop: License
This project is distributed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License). 
Please refer to our [license page](https://github.com/matthaeusheer/pokino/blob/main/LICENSE).

# :nerd_face: Contributors
:sunglasses: Matthäus Heer  
:stuck_out_tongue_winking_eye: Steven Schürstedt  
:innocent: Leo Rutschmann  
