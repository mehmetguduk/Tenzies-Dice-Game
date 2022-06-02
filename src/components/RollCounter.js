/*
    THIS FILE WAS DEVELOPED BY MEHMET GUDUK
    © 2022 COPYRIGHT, LICENSED WITH GPL-3.0 LICENSE, AUTHOR IS MEHMET GUDUK
    https://github.com/mehmetguduk
*/

export default function RollCounter(props) {
    return (
        <p className="roll-counter">
            <span className="count">Roll Count : {props.rollCount}</span>
        </p>
    )
}