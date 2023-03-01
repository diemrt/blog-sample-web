import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: "sample1",
        title: "L'arte oggi, ecco come gli NFT stanno cambiando l'arte",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue euismod est, ut mollis tellus consequat sit amet. Aliquam lacinia finibus convallis. Donec pretium eros erat, quis iaculis sapien pulvinar viverra. Fusce in nisl vitae turpis ultricies consequat. Suspendisse et dictum ipsum, sodales sollicitudin nisl. Donec vitae lectus ut tortor finibus varius vitae eget sem. Integer enim velit, facilisis et nibh eget, sagittis ornare mi.",
        cover: "/images/sample1.jpg"
    },
    {
        id: "sample2",
        title: "aggiornamento sul blog 2023, come iniziare bene l'anno con noi",
        description: "Nam tincidunt lectus eu mi sagittis pulvinar. Cras lorem turpis, sagittis vitae odio et, vehicula vestibulum justo. Nulla rutrum risus a lacus aliquet, vitae ultrices urna bibendum. Pellentesque feugiat velit libero, at porta nunc sagittis et. Fusce lacinia et ipsum vel feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dignissim tortor at nisl laoreet, eu fringilla nisl luctus. Maecenas dignissim eu diam sed placerat."
    },
    {
        id: "sample3",
        title: "Blender in pensione, arriva un nuovo strumento sul mercato per la 3D Art",
        description: "Nam tincidunt lectus eu mi sagittis pulvinar. Cras lorem turpis, sagittis vitae odio et, vehicula vestibulum justo. Nulla rutrum risus a lacus aliquet, vitae ultrices urna bibendum. Pellentesque feugiat velit libero, at porta nunc sagittis et. Fusce lacinia et ipsum vel feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc dignissim tortor at nisl laoreet, eu fringilla nisl luctus. Maecenas dignissim eu diam sed placerat.",
        cover: "/images/sample2.jpg"
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
});

export const {postAdded} = postsSlice.actions

export default postsSlice