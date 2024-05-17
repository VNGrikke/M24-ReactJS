import React, {useState} from 'react'
import Bt7 from './component/bt7'
export default function parent4() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Mai', content: 'Những lí', author: 'Vương 1' },
        { id: 2, title: 'Nghi', content: 'do để', author: 'Vương 2' },
        { id: 3, title: 'Hoc', content: 'Học sinh nghỉ học', author: 'Vương 3' }
      ]);
    
      return (
        <div>
            <h2>Danh sach bai viet</h2>
            {posts.map(post => (
                <Bt7 key={post.id} post={post} />
            ))}
        </div>
      );
}
