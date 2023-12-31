# **We Love** :a:ngular .
## Generic :a:ngular App
#### :wink: **Purpose**: `To Give You A Good Idea About Best Practice architecture of the project structure`;
### **How to use** :thinking: : **_`It's prefered as a reference, you can use it in production on your own risk`_** 
This project was generated with [:a:ngular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the :a:ngular CLI use `ng help` or go check out the [:a:ngular CLI Overview and Command Reference](https://angular.io/cli) page.
# What is Generic :a:ngular App? :octocat:
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](./src/assets/docs/github.png?raw=true)
## **This is a regular :a:ngular app created with modules not standalone, it can be converted to standalone**.

- **_Use this project as a base for you own project, there is no magic in it_**, 
- **_but i have provided the common services that you may want to use_**.

## The Common Services **:yum:**
 - :large_blue_diamond: **_dataService_** :large_orange_diamond: => `import it in the components that will need access to the apis.`
 - :large_blue_diamond: **_metaService_**  :large_orange_diamond: => `import it in every component that you will set the meta tags in for SEO and SSR.`
 - :large_blue_diamond: **_helpersService_** :large_orange_diamond: = > `import it as utility anywhere in the app.`
 - :large_blue_diamond: **_authService_** :large_orange_diamond: => `This can be used if your app requires login or register.`
 - :large_blue_diamond: **_locationService_** :large_orange_diamond: = > `This can be used to get locations and put markers on the map.`
 
## Guards **:shield:**
- `core/auth/auth.guard.ts` => This file should be used to determine if the user is authenticated or not (login - register);
- `core/auto-login/auto-login.ts` => This file should be used to detect the user is logged in or not.
#### `And More you can generate to handle sperate functionality, `ng generate guard name/of/gaurd`; this should ask you for the guard type first `

## Interfaces :books:
- Please use interfaces for the objects that you will use more than 1 time and import them.

## Reslovers :mag_right:
- :a:ngular Resolver  is used for pre-fetching some of the data when the user is navigating from one route to another. It can be defined as a smooth approach for enhancing user experience by loading data before the user navigates to a particular component.
- the user is navigating through the application before :a:ngular has rendered the desired page; that makes it; a navigation blocker, as it blocks the navigation until it's resolved.

## Shared Components :open_hands:

- Shared Components are :a:ngular regular components that can be used for separating view components and register them whereever you want inside the app.
- **Example**:

|     Header             | side-nav                 |
| :---: | :---: |
| header.component.ts    | side-nav.component.ts    |
| header.component.scss  | side-nav.component.scss  |
| header.component.html  | side-nav.component.html  |

- **P.S** **_`shared components are regular classes components, the whole idea is to seperate your work for modularity and reusability`_**