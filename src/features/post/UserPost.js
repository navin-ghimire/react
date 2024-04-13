import React from 'react'
import { useGetPostByUserQuery } from './postApi';
import PostSkeleton from '../../ui/PostSkeleton';

const UserPost = ({ user }) => {
  const {isLoading, isError, error, data} = useGetPostByUserQuery(user);
  
console.log(data);
  return (
    <div className='space-y-3'>
     <div className='flex justify-between'>
     <h1>{user.name} Posts</h1>
     <button size='sm' color='green' className='text-[10px] py-[4px] px-2' >Add Random Post</button>
     </div>

    {isLoading ? <PostSkeleton />: <div>
      {data.map((post) => {
        return <div key={post.id} className='space-y-3 flex justify-between items-center' >
          <h2 className='text-lg text-gray-600'>{post.title}</h2>
          <button size='sm' color='pink' className='text-[10px] py-[4px] px-2'>Remove</button>
        
        </div>
      })}
    </div> }
    </div>
  )
}

export default UserPost
