export default function City(props){
    return (
        <>
            <img src={props.image}/>
            <div>{props.cityInfo}</div>
        </>
    )
}