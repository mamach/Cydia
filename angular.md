# Angular 

## Dependency Injection
* Angular creates **root injector** with **singleton providers**.
* How angular builds injector tree?
![angular injector tree](https://cdn-images-1.medium.com/max/1500/1*rjG7U4vLG_keRYoZnryxbA.png)
* If we have a module with some providers and import this module directly in **AppModule** or in any other module, which has been already imported in **AppModule**, then those providers become application-wide providers.

## References
[1]: [Dependency Injection Tree](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)
[2]:[https://angular.io/guide/ngmodule-faq](https://angular.io/guide/ngmodule-faq)
[3]: [https://angular.io/guide/hierarchical-dependency-injection#re-providing-a-service-at-different-levels](https://angular.io/guide/hierarchical-dependency-injection#re-providing-a-service-at-different-levels)
