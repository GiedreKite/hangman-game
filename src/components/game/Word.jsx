import { useEffect, useState } from "react";
import { words } from './components/data/words'
localStorage.setItem('data',JSON.stringify(words))
//  export function Word() {
//     const storageDataKey = "words";

//     const [words, setWord] = useState(readLocalData());
//   setWord=words;
//     useEffect(() => {
//       localStorage.setItem(storageDataKey, JSON.stringify(words));
//     }, [words]);
//     console.log(words);
//     console.log(setWord);
//     console.log(words);
  
  
//     function readLocalData() {
//       const localData = localStorage.getItem(storageDataKey);
  
//       if (localData) { 
//         return JSON.parse(localData);
//       }
  
//       return [];
//     }
//     console.log(Word());
  
// };