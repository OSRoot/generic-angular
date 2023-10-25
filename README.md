## Generic Angular App
# :wink: Purpose: `To Give You A Good Idea About Best Practice architecture of the project structure`;
### **How to use** :thinking: : **_`It's prefered as a reference, you can use it in production on your own risk`_** 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# What is Generic Angular App?
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](./src/assets/docs/github.png?raw=true)
## **This is a regular angular app created with modules not standalone, it can be converted to standalone**.

##### **_Use this project as a base for you own project, there is no magic in it_**, 
##### **_but i have provided the common services that you may want to use_**.

## The Common Services **:yum:**
###### - DataService => import it in the components that will need access to the apis.
###### - MetaService => import it in every component that you will set the meta tags in for SEO and SSR.
###### - HelpersService = > import it as utility anywhere in the app.
###### - AuthService = > This can be used if your app requires login or register.
###### - LocationService = > This can be used to get locations and put markers on the map.
 
## Guards 
- `core/auth/auth.guard.ts` => This file should be used to determine if the user is authenticated or not (login - register);
- `core/auto-login/auto-login.ts` => This file should be used to detect the user is logged in or not.
#### `And More you can generate to handle sperate functionality, `ng generate guard name/of/gaurd`; this should ask you for the guard type first `

## Interfaces 
- Please use interfaces for the objects that you will use more than 1 time and import them.

## Reslovers
- the user is navigating through the application before Angular has rendered the desired page; that makes it; a navigation blocker, as it blocks the navigation until it's resolved.

## Shared Components
