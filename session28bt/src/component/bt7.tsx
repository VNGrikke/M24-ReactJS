import React from 'react'


export default function bt7({post}) {
  return (
    <div>
        <p>Id: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Content: {post.content}</p>
        <p>Author: {post.author}</p>
        <p>_______________________________</p>
    </div>
  )
}
