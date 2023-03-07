import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Cover(props){
    return <LazyLoadImage className="w-60 h-60 object-cover border-2 border-slate-900" alt={props.id} src={`/images/${props.cover}.jpg`} placeholderSrc={`/images/placeholder_${props.cover}.jpg`} />;
}