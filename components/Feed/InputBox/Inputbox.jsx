import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon,TrashIcon,PlusCircleIcon} from "@heroicons/react/solid"
import React, { useState ,useEffect,useRef} from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import Emoji from './Emoji';
import Swal from 'sweetalert2'
import { createPost, getPosts} from '../../../actions/index';
import { useDispatch, useSelector } from 'react-redux';

function Inputbox({session}) {
 
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [inputval, setinputval] = useState('');
    const [status ,setstatus]=useState();
    const filepickerRef=useRef(null);
    const [imagePost,setimagePost]=useState(null);
    const [postData, setpostData]=useState({ username: session.user.name, email: session.user.email,image: '' , caption: '',profile:session.user.image });
    // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    ////////Emoji box set hidden////////////////////
    const [EmojiBox, setEmojiBox] = useState(false);
    const onEmojiClick = (e, emojiObject) => {
      setpostData({...postData , caption: postData.caption+ e.target.innerHTML});
      };
  
      // const [session] = useSession()
      const closeDropdown = () => {
         setEmojiBox(false);
      }
      const showDropdown = () => {
          setEmojiBox(!EmojiBox);
          console.log("dsdsd")
      }
      const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  
 /////////////////////  to send the post
    async function sendPost(e){
        e.preventDefault();  

        dispatch(createPost(postData))
        .then(window.location.reload())
       
      
        // if(!postData.caption && !postData.image) return ;
        // axios.post('http://localhost:5000/poster/add', postData)
        //         .then(res=>setstatus(res.status))

                         
    }
    ////to upload image /////////////////
    const addImagePost=(e)=>{
            const reader=new FileReader();
            if(e.target.files[0]){
                reader.readAsDataURL(e.target.files[0])
            }

            reader.onload=(readerEvent)=>{
                setimagePost(readerEvent.target.result);
             
            }
    }

    const removeImage=()=>{
            setimagePost()
    }
    /////////////////tu push the image to the postData array
    useEffect(()=>{
        if(imagePost){
            setpostData({...postData,image:imagePost})
        }
        else{
            setpostData({...postData,image:''})
        }
    },[imagePost])
    ///////to show if that is works
    useEffect(()=>{

            if(status==200){
                  setpostData({...postData, image: '', caption: ''})
                  setstatus();
                  removeImage();
                  return;
            }
            
            if(status !== undefined) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',      
            })
            return; 
            }
        
    },[status])
    console.log(postData)
    return (
    <div className="bg-white py-1 md:p-2 rounded-2xl  shadow-md text-gray-500 font-medium mt-6 ">
        <div className="relative  flex md:space-x-4 x-4 md:p-3 items-center ">
            <img className="rounded-full hidden md:inline md:w-16 md:h-16" src={session.user.image} alt="" />
            <form onSubmit={(e)=>sendPost(e)}  className="flex flex-1 relative items-center " >
                <input value={postData.caption} onChange={(e)=>setpostData({...postData , caption: e.target.value.trimStart()})} className="rounded-full pr-12 h-10 md:h-12 bg-gray-200 flex-grow px-5 focus:outline-none" type="text" placeholder={`What's on your mind, ${session.user.name} ?`} />
                
                <div ref={ref} >
                    <EmojiHappyIcon onClick={()=>setEmojiBox(!EmojiBox)} className="h-7 top-2 md:top-3 text-yellow-500 absolute right-4 cursor-pointer hover:text-yellow-600"/>
                    <div  className={`${EmojiBox ? 'block' : 'hidden'} absolute  top-14 w-2/4 right-0 bg-gray-300 p-3 flex flex-wrap items-center justify-center overflow-y-auto h-20`}> 
                        {Emoji.map((a,index)=>(
                            <div key={index} onClick={(e)=>onEmojiClick(e)} className="flex justify-center rounded-full cursor-pointer py-1 px-1 hover:bg-gray-400">
                                {a.emoji}
                            </div>
                        ))}
                    </div>
                </div>
             
            </form>
            <div className="" onClick={()=>filepickerRef.current.click()}>
                <CameraIcon className="h-7 cursor-pointer hover:text-gray-400"/>           
                <input ref={filepickerRef} onChange={addImagePost} type="file" accept="image/*"  hidden/>
                            
            </div>
        
        </div>
        {/* to render the image that user want to post */}
        {imagePost && (
            <div className="flex justify-center py-1 pb-3">
                <div className="flex flex-col  rounded-md bg-gray-300 p-2">
                    <img src={imagePost} className="h-40 object-contain rounded"/>
                    <TrashIcon onClick={removeImage} className="h-7 hover:bg-red-700 mt-1 rounded cursor-pointer  p-1 bg-red-500 text-gray-300"/>
                  
                </div>
            </div>
        )}

        {postData.caption||postData.image ?   
        <div className="w-full flex flex-col items-center p-1 justify-center">
            <PlusCircleIcon onClick={(e)=>sendPost(e)} className="h-8 cursor-pointer sm:h-14 bottom-1 right-0 text-yellow-600"/>
         
        </div>
        : null
        }
    </div> 
    )
}

export default Inputbox
