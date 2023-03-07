export default function ShowOnCondition(condition, WrapperdComponent, props){

    if(typeof condition !== "undefined" && condition){
        return <WrapperdComponent {...props} />
    }
}