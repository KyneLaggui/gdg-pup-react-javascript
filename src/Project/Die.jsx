export default function Die(props) {
    const styles = {
        backgroundColor: props.isClicked ? "green" : "red"
    }

    return (
        <button 
            style = {styles}
            onClick = {() => props.hold(props.id)}
        >{props.value}</button>
    )
}