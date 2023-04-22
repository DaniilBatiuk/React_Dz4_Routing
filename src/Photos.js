export default function Photos(props){
    return (
        <>
        {props.images.map((element, index) => (
            <img key={index} src={element} alt={`Image ${index}`} />
        ))}
        </>
    );
}