# learning TypeScript
-------------------------------------------------------------------------
# TypeScript
1. TypeScript is a superset of JavaScript that adds static typing to the language.
2. TypeScript is a strongly typed programming language that builds on     JavaScript, giving you better tooling at any scale.
--------------------------------------------------------------------------
# To run the file:
1. tsc filename.ts
2. node foldername/filename.js
--------------------------------------------------------------------------
# tsconfig - flags
=> Here this src file is created so that while making a git repo it will only add this file not the js files

for this we need to add a .gitignore file
and some setting in tsconfig.json
```ts
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
  },
}
```
=> If we allow implicit any then we dont have to define the type of the variable in the function
but if we set noImplicitAny to true then we have to define the type of the variable in the function(it's by default true)
```ts
{
  "compilerOptions": {
    "noImplicitAny": false
  }
}
```
------------------------------------------------------------------------
# classes,Objects and constructors
1. class - blueprint of the object
2. object - instance of the class
3. constructor - special method of the class that is called when an object is created
4. constructor - used to initialize the properties of the class

--------------------------------------------------------------------------
# interfaces
1. interface - contract that defines the structure of an object
2. interface is only in TypeScript and not in JavaScript
--------------------------------------------------------------------------
# difference between interface and type
interfaces can be implemented as classes



