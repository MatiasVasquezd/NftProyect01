import React, {useState} from 'react'
import {addComment} from '../api/posts'

const Modal = ({setShow, post}) => {
  const [comment, setComment] = useState('');
  const cancelHandler = () => {
    setShow('hidden')
  }
  const addCommentHandler = (e,idPost) => {
    e.preventDefault();
    console.log(comment);
    addComment(idPost, comment);
  }
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
      
      <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">{post?.title}</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500"><img src={post?.image.url}></img> {post?.description}</p>
              </div>
            </div>
            <div>
              <form onSubmit={(e)=>addCommentHandler(e,post._id)}>
                <input type='text' placeholder='Deja tu comentario...' required onChange={(e)=>setComment(e.target.value)}></input>
                <button type='submit'>Comentar</button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={cancelHandler}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Deactivate</button>
          
        </div> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal