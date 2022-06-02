/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

import { nanoid } from "nanoid"

export default function Die(props) {
    const diceColor = {
        backgroundColor: props.isHeld ? "#59e391" : "#ffffff"
    }

    const dots = []

    for (let i = 0; i < props.value; i++) {
        dots.push(
            <div className="dot" key={nanoid()}></div>
        )
    }

    return (
        <div
            className={`die-face face-${props.value}`}
            style={diceColor}
            onClick={() => { props.holdDice(props.id) }}
        >
            {dots}
        </div>
    )
}



