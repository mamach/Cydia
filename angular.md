# Angular 

## Components
* `selector`
* `templateUrl`
* `styleUrls`

## Dependency Injection
* Angular creates **root injector** with **singleton providers**.
* How angular builds injector tree?
![angular injector tree](https://cdn-images-1.medium.com/max/1500/1*rjG7U4vLG_keRYoZnryxbA.png)
* If we have a module with some providers and import this module directly in **AppModule** or in any other module, which has been already imported in **AppModule**, then those providers become application-wide providers.

## Adding a new module 
Angular module is used to group following things which are related to common functionality.
* components
* services
* directives
* services
* pipes


## CLI
* `ng new angular-bootstrap-example --style scss --prefix abe` sample command to create new project with scss as default style and default prefix.
* `npm i -S bootstrap` command to install bootrap latest stable version.

## References
[1]: [Dependency Injection Tree](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)
[2]:[https://angular.io/guide/ngmodule-faq](https://angular.io/guide/ngmodule-faq)
[3]: [https://angular.io/guide/hierarchical-dependency-injection#re-providing-a-service-at-different-levels](https://angular.io/guide/hierarchical-dependency-injection#re-providing-a-service-at-different-levels)
[4]: [Angular flex layout](https://github.com/angular/flex-layout)
[5]: [Angular-ngRX-material starter](https://github.com/tomastrajan/angular-ngrx-material-starter)
[6]: [Styling Angular App loading](https://medium.com/@tomastrajan/how-to-style-angular-application-loading-with-angular-cli-like-a-boss-cdd4f5358554)
[7]: []()