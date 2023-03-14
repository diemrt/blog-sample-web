import { useGetPostsQuery } from "../../../redux/api/apiSlice";
import RenderItems from "../../RenderItems/RenderItems.component";
import ShowOnCondition from "../../ShowOnCondition/ShowOnCondition.component";
import PostPreview from "../PostPreview/PostPreview.component";

export default function ListWrapper(){
    const {
        data: posts,
        isSuccess
    } = useGetPostsQuery()

    const PostsPreview = RenderItems(posts, PostPreview);
    const list = ShowOnCondition(isSuccess, PostsPreview)
    return list;
}