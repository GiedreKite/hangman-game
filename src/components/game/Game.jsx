import style from './Game.module.css';
import { words } from '../data/words.js';
import { useEffect, useState } from "react";
import playyy from '../img/playyy.png';
import puzzleele from '../img/puzzleele.png';
import puzlele from '../img/puzlele.png';
import gameoverrr from '../img/gameover.png'
import one from '../img/one.png';
import two from '../img/two.png';
import tree from '../img/tree.png';
import four from '../img/four.png';
import five from '../img/five.png';
import six from '../img/six.png';

export function Game(params) {
    const [start,setStart] =useState(true);
    const [randomNumber,setRandomNumber] =useState(1);    
    const [hidden,setHiddenWord] =useState('');
    let [guessed,setGuessed] =useState([]);
    const [life,setLife] =useState(6);
    const [revealed,setRevealed] = useState('');
    const [end,setEnd] =useState(false);
    const [pushedkey,setpushedkey] =useState([]);

    const storageWinKey = 'win';
    const storageLoseKey = 'lose';
    const [winGame, setWinGame] = useState(readLocalWin());
    const [loseGame, setLoseGame] = useState(readLocalLose())
 

    readLocalData();
    useEffect(() => {
        localStorage.setItem(storageWinKey, JSON.stringify(winGame));
    }, [winGame]);

    useEffect(() => {
        localStorage.setItem(storageLoseKey, JSON.stringify(loseGame));
    }, [loseGame]);

    function readLocalWin() {
        const localData = localStorage.getItem(storageWinKey);
        if (localData) {
            return JSON.parse(localData);
        }
        return 0;
    }

    function readLocalLose() {
        const localData = localStorage.getItem(storageLoseKey);
        if (localData) {
            return JSON.parse(localData);
        }
        return 0;
    }
    function readLocalData() {
        const words = localStorage.getItem('data');
        if (words) {
            return JSON.parse(words);
        }
        return words;
    }

    useEffect(()=>{
        window.addEventListener('keyup', (e) => {
            const pushedkey = (e.key)[0].toUpperCase();
            const abc = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']
           console.log(!guessed.includes(pushedkey))

           console.log(abc.includes(pushedkey) )
           console.log( !end )
            // end=false;
        
            if(!guessed.includes(pushedkey) && abc.includes(pushedkey) && !end ){
                //  guessed.push(pushedkey)
                //  setGuessed(guessed)
                guessLetter(pushedkey)
            }
         
            
            if(end){
                guessed=[];
                startGame();
   
            }
          });
    },)


        
    startGame();
    
    function startGame() {
        if(start===true){
            const temp_num=Math.floor(Math.random() * (10 - 1 + 1)) + 1
        setRandomNumber(temp_num);
        setRevealed(words[temp_num].word)
        setGuessed([])
        setpushedkey([])
        setHiddenWord(Array.from(words[temp_num].word.split(""),() => "_ ").join(""))
        // hideWord(guessed);
        console.log(randomNumber)
        console.log(revealed)
        console.log(words[temp_num].word)
        setStart(false);
        setLife(6);
        setEnd(false);
        }
    }
    function hideWord(guessed) {
       let tempHidden ='';


    
        let passed=true;
     
        for (let i = 0; i<revealed.length; i++) {
            //patikrinti ar raide yra tarp spetu
            // console.log(revealed.charAt(i))
            // console.log(guessed.includes(revealed.charAt(i)))
            if(guessed.includes(revealed.charAt(i))) {
                tempHidden+=revealed.charAt(i);
            }
 
            else{
                tempHidden += '_ ';
                passed=false;
    
            }
    
        }
        if(!tempHidden.includes('_') && life>0){
            passed = false;
            setEnd(true);
            alert('You Win the game!');
            setWinGame(winGame + 1);
              
       
       
               //laimejo ir kuria mygtuka pradeti is naujo
          // }
           //jei nera _
           }
           console.log(guessed)
    
        console.log(tempHidden)
        setHiddenWord(tempHidden);
    }
    
    



    
    function guessLetter(letter) {
        guessed.push(letter);
        setGuessed(guessed)
        hideWord(guessed);
       
        console.log(letter);
        console.log(guessed);
    
        if (!revealed.includes(letter)) {
            if(life>1)
                setLife(life-1);            
            else{
                setLoseGame(loseGame + 1)
                setEnd(true)
                setLife(life-1);
                alert('You LOST the Game')
            } 
        }
        console.log(life)
        if (setEnd===true){
            life-1
        }
        
    }
    const [isMobile, setIsMobile] = useState(false);

    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  
    useEffect(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
  
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

        return ( 
        <>
         <div className={style.gameContainer}>
    <h2 className={style.gameCount}>- Win:{winGame} - </h2>
    <h2 className={style.gameCount}> - Lose:{loseGame} -</h2>
    </div>

           
            <div className="play">
                 {!isMobile && (<img className="lifeimg"   src={playyy} alt="#" />)}
                 {!isMobile && (<img className="lifeimg" style={life<6 ? (6 ? {display: "none"}: {display: "inline-block"} ) : {}} src={puzlele} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life<5 ? (5 ? {display: "none"}: {display: "inline-block"} ) : {}} src={puzzleele} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life<4 ? (4 ? {display: "none"}: {display: "inline-block"} ) : {}} src={puzlele} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life<3 ? (3 ? {display: "none"}: {display: "inline-block"} ) : {}} src={puzzleele} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life<2 ? (2 ? {display: "none"}: {display: "inline-block"} ) : {}} src={puzlele} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life<1 ? (1 ? {display: "none"}: {display: "inline-block"} ) : {}} src={puzzleele} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life!=5 ? (life!=5 ? {display: "none"}: {display: "inline-block"} ) : {}} src={one} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life!=4 ? (life!=4 ? {display: "none"}: {display: "inline-block"} ) : {}} src={two} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life!=3 ? (life!=3 ? {display: "none"}: {display: "inline-block"} ) : {}} src={tree} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life!=2 ? (life!=2 ? {display: "none"}: {display: "inline-block"} ) : {}} src={four} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life!=1 ? (life!=1 ? {display: "none"}: {display: "inline-block"} ) : {}} src={five} alt="" />)}
                 {!isMobile && (<img className="lifeimg" style={life!=0 ? (life!=0 ? {display: "none"}: {display: "inline-block"} ) : {}} src={six} alt="" />)}

                <p>Life:{life}</p>
    
            </div>
            {end &&
                <div> <h2>The Spell word was: {revealed}</h2>
                    <button className="endbutton" onClick={() => setStart(true)}>Play new game</button></div>
            }
    
                <h2>{hidden}</h2>
    
                <section className={style.keybord}>
                    <button onClick={() =>guessLetter('Q')} disabled={guessed.includes('Q') || end } style={guessed.includes('Q') ? (revealed.includes('Q') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>Q</button>
                    <button onClick={() =>guessLetter('W')} disabled={guessed.includes('W') || end } style={guessed.includes('W') ? (revealed.includes('W') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>W</button>
                    <button onClick={() =>guessLetter('E')} disabled={guessed.includes('E') || end } style={guessed.includes('E') ? (revealed.includes('E') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>E</button>
                    <button onClick={() =>guessLetter('R')} disabled={guessed.includes('R') || end } style={guessed.includes('R') ? (revealed.includes('R') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>R</button>
                    <button onClick={() =>guessLetter('T')} disabled={guessed.includes('T') || end } style={guessed.includes('T') ? (revealed.includes('T') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>T</button>
                    <button onClick={() =>guessLetter('Y')} disabled={guessed.includes('Y') || end } style={guessed.includes('Y') ? (revealed.includes('Y') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>Y</button>
                    <button onClick={() =>guessLetter('U')} disabled={guessed.includes('U') || end } style={guessed.includes('U') ? (revealed.includes('U') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>U</button>
                    <button onClick={() =>guessLetter('I')} disabled={guessed.includes('I') || end } style={guessed.includes('I') ? (revealed.includes('I') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>I</button>
                    <button onClick={() =>guessLetter('O')} disabled={guessed.includes('O') || end } style={guessed.includes('O') ? (revealed.includes('O') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>O</button>
                    <button onClick={() =>guessLetter('P')} disabled={guessed.includes('P') || end } style={guessed.includes('P') ? (revealed.includes('P') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>P</button>
                    <button onClick={() =>guessLetter('A')} disabled={guessed.includes('A') || end } style={guessed.includes('A') ? (revealed.includes('A') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>A</button>
                    <button onClick={() =>guessLetter('S')} disabled={guessed.includes('S') || end } style={guessed.includes('S') ? (revealed.includes('S') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>S</button>
                    <button onClick={() =>guessLetter('D')} disabled={guessed.includes('D') || end } style={guessed.includes('D') ? (revealed.includes('D') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>D</button>
                    <button onClick={() =>guessLetter('F')} disabled={guessed.includes('F') || end } style={guessed.includes('F') ? (revealed.includes('F') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>F</button>
                    <button onClick={() =>guessLetter('G')} disabled={guessed.includes('G') || end } style={guessed.includes('G') ? (revealed.includes('G') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>G</button>
                    <button onClick={() =>guessLetter('H')} disabled={guessed.includes('H') || end } style={guessed.includes('H') ? (revealed.includes('H') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>H</button>
                    <button onClick={() =>guessLetter('J')} disabled={guessed.includes('J') || end } style={guessed.includes('J') ? (revealed.includes('J') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>J</button>
                    <button onClick={() =>guessLetter('K')} disabled={guessed.includes('K') || end } style={guessed.includes('K') ? (revealed.includes('K') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>K</button>
                    <button onClick={() =>guessLetter('L')} disabled={guessed.includes('L') || end } style={guessed.includes('L') ? (revealed.includes('L') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>L</button>
                    <button onClick={() =>guessLetter('Z')} disabled={guessed.includes('Z') || end } style={guessed.includes('Z') ? (revealed.includes('Z') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>Z</button>
                    <button onClick={() =>guessLetter('X')} disabled={guessed.includes('X') || end } style={guessed.includes('X') ? (revealed.includes('X') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>X</button>
                    <button onClick={() =>guessLetter('C')} disabled={guessed.includes('C') || end } style={guessed.includes('C') ? (revealed.includes('C') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>C</button>
                    <button onClick={() =>guessLetter('V')} disabled={guessed.includes('V') || end } style={guessed.includes('V') ? (revealed.includes('V') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>V</button>
                    <button onClick={() =>guessLetter('B')} disabled={guessed.includes('B') || end } style={guessed.includes('B') ? (revealed.includes('B') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>B</button>
                    <button onClick={() =>guessLetter('N')} disabled={guessed.includes('N') || end } style={guessed.includes('N') ? (revealed.includes('N') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>N</button>
                    <button onClick={() =>guessLetter('M')} disabled={guessed.includes('M') || end } style={guessed.includes('M') ? (revealed.includes('M') ? {backgroundColor: "green"}: {backgroundColor: "red"} ) : {}}className={style.key}>M</button>
                   
                </section>
    
               
          </>
        );
    }