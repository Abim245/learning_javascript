const post = {
    title:'hello',
    id:1,
    body:'hello it me',
}

//convert to json
const str =JSON.stringify(post);
//back to initial post
const obj =JSON.parse(post);

//array
const Post = [
        {
        title:'hello',
        id:1,
        body:'hello it me',
    },
    {
        title:'hello',
        id:2,
        body:'hello it me',
    }
]

const str2 = JSON.stringify(Post);

console.log(obj);
