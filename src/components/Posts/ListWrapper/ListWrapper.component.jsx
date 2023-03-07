import RenderItems from "../../RenderItems/RenderItems.component";
import ShowOnCondition from "../../ShowOnCondition/ShowOnCondition.component";
import PostPreview from "../PostPreview/PostPreview.component";

export default function ListWrapper(props){
    const PostsPreview = RenderItems(props.posts, PostPreview);
    const list = ShowOnCondition(typeof props !== "undefined", PostsPreview, props)
    return list;
}