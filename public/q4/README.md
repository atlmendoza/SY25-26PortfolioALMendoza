## example to implement CRUD on JS Object
```
// Our main object: an anime collection with multiple characters
let animeCollection = {
  naruto: { name: "Naruto Uzumaki", age: 17, anime: "Naruto" },
  luffy: { name: "Monkey D. Luffy", age: 19, anime: "One Piece" },
  goku: { name: "Son Goku", age: 30, anime: "Dragon Ball Z" }
};

// 1. ADD a new character
animeCollection.sakura = { name: "Sakura Haruno", age: 17, anime: "Naruto" };
console.log(animeCollection);

// 2. READ a character's information
console.log(animeCollection.luffy.name);   // Monkey D. Luffy
console.log(animeCollection.goku.anime);   // Dragon Ball Z

// 3. UPDATE a character's information
animeCollection.naruto.age = 18; // Naruto had a birthday!
console.log(animeCollection.naruto); 
// { name: 'Naruto Uzumaki', age: 18, anime: 'Naruto' }

// 4. DELETE a character
delete animeCollection.goku;
console.log(animeCollection);
// goku is gone, only naruto, luffy, and sakura remain
```

## Same example this time with the use of localStorage
```
// Our anime collection object
let animeCollection = {
  naruto: { name: "Naruto Uzumaki", age: 17, anime: "Naruto" },
  luffy: { name: "Monkey D. Luffy", age: 19, anime: "One Piece" },
  goku: { name: "Son Goku", age: 30, anime: "Dragon Ball Z" }
};

// 1. SAVE to localStorage
localStorage.setItem("animeCollection", JSON.stringify(animeCollection));
// Data is stored as a string, so we use JSON.stringify

// 2. READ from localStorage
let savedCollection = JSON.parse(localStorage.getItem("animeCollection"));
console.log(savedCollection.luffy.name); // Monkey D. Luffy

// 3. UPDATE a character (Naruto’s age)
savedCollection.naruto.age = 18;

// Save the updated object back to localStorage
localStorage.setItem("animeCollection", JSON.stringify(savedCollection));

// 4. DELETE a character (remove Goku)
delete savedCollection.goku;

// Save again after deletion
localStorage.setItem("animeCollection", JSON.stringify(savedCollection));

// 5. CLEAR everything (optional)
localStorage.removeItem("animeCollection");
```