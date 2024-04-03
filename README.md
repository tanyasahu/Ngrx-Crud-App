# NgrxPoc

This is a CRUD application created with Ngrx and RxJS. RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.NgRx Store provides reactive state management for Angular apps inspired by Redux. Unify the events in your application and derive state using RxJS. 

In this project we are creating a CRUD application we have a ngrx/store that is helping us manage all the states. We have created actions that will be disptached from components when user interacts with the UI and reducers will handle the states for changes and updations. We have created a json server(db.json) that stores database and all the data being fetch from it using our user service with help of RxJS and it is being updated in all our components that have subscribed it.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Install Dependencies

Run `npm i` install dependencies. This will install all the required dependencies from package.json and it is a important step to run application successfully.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

