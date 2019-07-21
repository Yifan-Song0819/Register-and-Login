export * from './home.component';


//Create a file named index.ts inside the home folder, this is a barrel file that re-exports components from the home folder
//so they can be imported in other files using only the folder path (e.g. './home')
//instead of the full path to the component (e.g. './home/home.component').  
