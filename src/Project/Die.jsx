export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "green" : "red"
    }

    return (
        <button style={styles}>{props.value}</button>
    )
}