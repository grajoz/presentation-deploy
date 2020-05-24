Ttranscript of the presentation:

Hello!

My name is Pavel

I’m going to represent you some info about Angular .

Angular is a framework for building client applications in HTML and either JavaScript or a language like TypeScript that compiles to JavaScript . The framework consists of several libraries  . Typescript is more common in the Angular community because Angular itself has been written by Typescript .
Over the past few years various frameworks have been built and evolved to make web application development easier . Angular is the example of such framework . 

AngularJS introduces in 2010 as Javascript framework for building client applications. Soon it gets popularity and Angular team started adding new features . Due to needs today’s application Angular team rewrote the original framework using typescript and as a result Angular 2 came out in mid of 2016 .

There rather a lot of differences different the first and the second version of Angular and many developers unhappy because they had a lot of applications built with Angular 1  .   But this new framework is a much cleaner framework and it is a lot easier to understand and to work with .

The benefits of using Angular . At first it gives our application a clear and loosely coupled structure that is easy to understand and easy to maintain . Applications build with Angular are more testable .

Let me show you how it is easy to use Angular .


Then we will need an - Angular CLI . It is a command line tool that we use to create a new angular project

We can create our first project . You see this command when you create new project generates new files and folders for our project . 

You can use any  code editor which is familiar for you.

The structure of the Angular project. 

So the first folder we have here is the e2e folder. And this is where we write end to end tests for our application.

We have of course node modules and this is where you store all the third party libraries that our application may depend upon.

Also we have the source folder and this is where we have the actual source code of our application.

We have this app folder where inside there are module and a component .

We have these assets folder where you store the static assets of our application . 

We have this environment folder and this is where we store configuration settings for different environments . 


Also inside the source folder, we have an index.html file that contains our Angular application. Here we don't have any references to a script or a stylesheet. These references will be dynamically inserted into this page.

We have the main file which is a typescript file and this is basically the starting point of our application. 

We have this polyfills file. Polyfills file basically imports some scripts that are required for running Angular. 

Also we have styles.css file and this is where we add the global styles for our application and also each page or each component can have its own styles.

We have editorconfig . So this is where you store settings .

The other file here is TSconfig which has a bunch of settings for your typescript compiler . 

Also we have TSlint.jason which includes a number of settings for TSlint . 

Also, we have an important files package.jason and gitignor.

So this is the basic structure of an angular project .


Angular CLI uses this tool called a webpack. It gets all our scripts and stylesheets and combines them in a bundle and then modifies that bundle. And this is for optimization. More than that whenever you change one of your file webpack automatically recompile your application and refreshes your bundles.

All that functionality is included and hidden in Angular and works automatically. So you don’t have to even understand what is webpack and how it works . 

Using Angular makes your life a lot easier.

Thank you!
