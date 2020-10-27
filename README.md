# M&S Test

## Technical test

App has docker file inside, so if docker and docker composer are setup, app will start on http://localhost:3000 with one command 

```bash
docker-compose up
```

In order to run just the app in development 

```bash
npm install
npm run dev
```

Jest unit tests

```bash
npm run jest
```

Cypress integration tests: 

```bash
npm run test
```


### Places for improvement

- Caching loaded products when navigating back from PDP
- Fallback when API service is down
- Static generation for PDP pages
- Adding linting


## System design

Here are the two diagrams for system design:

- [System context diagram](https://raw.githubusercontent.com/iamserge/mns-next-test/master/static/System.png)
- [Container](https://raw.githubusercontent.com/iamserge/mns-next-test/master/static/Container.png)


