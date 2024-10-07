import style from './Game.module.css';
export function Game(params) {
    


    return (
        <div className="play">
        <video width="750" height="500" controls >
            <source src="../pla.pm4" type="video/mp4"/>
        </video>
            <img src="#" alt="#" />

        

            <h1> word </h1>

            <section className={style.keybord}>
                <p className={style.key}>Q</p>
                <p className={style.key}>W</p>
                <p className={style.key}>E</p>
                <p className={style.key}>R</p>
                <p className={style.key}>T</p>
                <p className={style.key}>Y</p>
                <p className={style.key}>U</p>
                <p className={style.key}>I</p>
                <p className={style.key}>O</p>
                <p className={style.key}>P</p>
                <p className={style.key}>A</p>
                <p className={style.key}>S</p>
                <p className={style.key}>D</p>
                <p className={style.key}>F</p>
                <p className={style.key}>G</p>
                <p className={style.key}>H</p>
                <p className={style.key}>J</p>
                <p className={style.key}>K</p>
                <p className={style.key}>L</p>
                <p className={style.key}>Z</p>
                <p className={style.key}>X</p>
                <p className={style.key}>C</p>
                <p className={style.key}>V</p>
                <p className={style.key}>B</p>
                <p className={style.key}>N</p>
                <p className={style.key}>M</p>
               
            </section>
           
        </div>
    );
}