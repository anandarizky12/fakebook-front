
import { useSelector ,useDispatch} from 'react-redux';

import Post from './post/Post';

function Posts({session}) {


    const posts = useSelector((state) => state.posts);
  
  
 
    return (
        <div >
            {!posts.length ? <h1>Loading . . . </h1> 
            :
            posts.map((post)=>(
              <Post session={session} post={post}/>
            ))
            }
         
        </div>
    )
}

export default Posts
