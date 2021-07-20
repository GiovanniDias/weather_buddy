<h1 id="about">Weather Buddy</h1>

Application to search for weather information by city.

<img src="https://img.shields.io/github/issues/GiovanniDias/weather_buddy_api"/>
<img src="https://img.shields.io/github/stars/GiovanniDias/weather_buddy_api"/>
<img src="https://img.shields.io/github/license/GiovanniDias/weather_buddy_api"/>
<img src="https://img.shields.io/badge/react-16.+-blue"/>

<h2 id="table-of-contents">Table of Contents</h2>

* [About](#about)
* [Table of Contents](#table-of-contents)
* [Features](#features)
* [How to use](#how-to-use)
    * [Requirements](#requirements)
    * [Installation](#installation)
    * [Setting Application](#setting-app)
    * [Running Application](#running-app)
        * [Using localhost](#localhost-approach)
        * [Using Docker](#docker-approach)
* [Endpoints](#endpoints)
* [Tests](#tests)

<h3 align="center">🚧 Building... 🚧</h3>

<h2 id="features">Features</h2>

- [x] Design components
- [x] Set data flow between components and events
- [x] Search for city weather info
- [x] Show last maximum five cities information.
- [x] Dockerize application
- [ ] Unit test
- [ ] Deploy on Vercel or Firebase Hosting

<h2 id="how-to-use">How to use</h2>

<h3 id="requirements">Requirements</h3>
You may need to have installed:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Docker](https://www.docker.com/products/docker-desktop) e [Docker compose](https://docs.docker.com/compose/install/)

<h3 id="installation">Installation</h3>

[Download Zip](https://github.com/GiovanniDias/weather_buddy/archive/refs/heads/master.zip) or use git to clone it using the command

    # https
    $ git clone https://github.com/GiovanniDias/weather_buddy.git

    # ssh
    $ git clone git@github.com:GiovanniDias/weather_buddy.git

Once you got the source code, it's time to set up the project to running.

<h3 id="setting-app">Setting application</h3>

On the project root, run ```yarn``` on terminal to install node_modules based on package.json

    $ yarn

Once it is finished you may run the application on localhost or using Docker.

<h3 id="running-app">Running application</h3>

To run application over **localhost**, execute the code below:

    $ yarn start

http://localhost:3000 to access it.

**<h4 id="docker-approach">Using Docker</h4>**

For running this application with Docker, use:

    $ docker-compose up --build -d
    # or
    $ docker compose up --build -d

depending on Docker version your local machine is using.
