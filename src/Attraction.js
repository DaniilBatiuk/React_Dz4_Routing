export default function Attraction(props){
    return (
        <>
            <img src={props.image}/>
            <div>{props.AttractionInfo}</div>
        </>
    )
}