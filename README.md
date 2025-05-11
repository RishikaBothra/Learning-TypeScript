learning TypeScript
-------------------------------------------------------------------------
# TypeScript
TypeScript is a superset of JavaScript that adds static typing to the language.
--------------------------------------------------------------------------
To run the file:
1. tsc <filename>.ts
2.node <foldername>/<filename>.js
--------------------------------------------------------------------------
#tsconfig - flags

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