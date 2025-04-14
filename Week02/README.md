# TypeScript

## Tutorial Link

- Part 1: https://www.youtube.com/watch?v=GQHiJpR6s08
- Part 2: https://www.youtube.com/watch?v=mYRvb_nGQRs

## TypeScript setup and config
### Install typescript in each new project
- ```npm install -g typescript```
- ```tsc --init```
  
### Compile a project :
- ```tsc``` (will compile all files)
- ```tsc <filename.ts>``` (will compile an specific file)  

### To run an app in the terminal:
- ```npm install ts-node```
- ```ts-node <filename.ts>```

### Add typecheck command to package.json
- ```"typecheck": "tsc --noEmit",``` 

## Package to install in a project
- Prettier —> code formatter (recommended)
- ESLint —> clean code

## NOTES
- To define the types in an object we do through an interface
- To define the types in a function we use type
