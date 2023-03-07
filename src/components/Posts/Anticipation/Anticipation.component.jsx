export default function Anticipation(props){
    const abbreviation = props.description?.length > 128 ? `${props.description.slice(0,128)}...` : props.description;

    return <p className="text-sm">{abbreviation}</p>;
}