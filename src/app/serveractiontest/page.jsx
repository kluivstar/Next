import { addPost, deletePost } from "@/libs/actions"

const ServerActionTestPage = () => {
    
    return (
        <div>
            <form action={addPost}>
            <input type="text" name="title" placeholder="title"  className=""/>
            <input type="text" name="desc" placeholder="desc"  className=""/>
            <input type="text" name="slug" placeholder="slug"  className=""/>
            <input type="text" name="userId" placeholder="userId"  className=""/>
            <button>Create</button>
            </form>
            
            <form action={deletePost}>
            <input type="text" placeholder="postId"  name="id"/>
            <button>Delete</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage