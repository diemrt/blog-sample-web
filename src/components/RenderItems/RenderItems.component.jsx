export default function RenderItems(itemList, WrapperdComponent){

    return () => itemList.map(item => <WrapperdComponent {...item} />);
}