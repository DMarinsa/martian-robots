# Martian Robots
## _A cli approach_

### Features

- Initialise a planet mars on given coordinates
- Initalise a robot on given coordinates, orientation and orders
- Clear the local db
- Initialise a traveling

### Installation

Our Martian Robots cli uses the a node version >= 16.0.0.

To install it run

```sh
cd martian-robots
npm i
npm run build
npm i -g .
```

This will install the package locally into your application. Once installed you can run

```sh
mars init 20 20
```
To initialise your mars planet

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

#### Still to Do

* Add more features related with exporting data about the travels
* Deploy it on github so we can just `npm i mars`
* Add e2e testing
* Use a better persistence layer approach

#### License

MIT
