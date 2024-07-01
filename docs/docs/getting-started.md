---
title: Getting started
sidebar_position: 1
---

## Hey👋
Thanks for thinking about working/contributing with/to this project! It started as a little hobby project. 
Now its my little baby I work on every time I can. Therefore, I am so happy about every person, who is motivated to contribute to this project or wants to do crazy shit with it.

Here I will explain you how to setup MaduChat on your own machine to be able to do something with it🚀

## Getting started with docker
- Clone [this repo](https://github.com/Madu-de/MaduChat)
- Create a .env file in /backend and add "JWT_SECRET=\{your_jwt_secret_here}" (You can also add this in the [docker-compose](https://github.com/Madu-de/MaduChat/blob/main/docker-compose.yml) at services>backend>environment)
- Execute "docker compose up -d" on the root directory
- Execute "docker compose watch" if you want to instruct Docker to monitor changes and save them in the containers
- Call the CreateGlobalchat procedure
- Go to "localhost:4200" in your browser and enjoy!

## Getting started without docker
- Clone [this repo](https://github.com/Madu-de/MaduChat)
- Create a .env file in /backend and add "JWT_SECRET=\{your_jwt_secret_here}"
- If you want to, you can add the following .env variables. 
  - DATABASE => Default is "maduchat"
  - DATABASE_HOST => Default is "localhost"
  - DATABASE_PORT => Default is 3306
  - DATABASE_USERNAME => Default is "root"
  - DATABASE_PASSWORD => Default is ""
- Execute "npm i" in /frontend and /backend
- Start MySQL with [XAMPP](https://www.apachefriends.org/de/download.html) for example
- Create the "maduchat" Database
- Start the "startdev.bat" (If you cannot use it, you have to start the frontend and backend manually in dev mode)
- Go back to the "chat" table and add the global chat.
  - id: global
  - name: Global
- Go to "localhost:4200" in your browser and enjoy!
