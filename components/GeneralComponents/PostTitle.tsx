import React,{FC} from 'react'
import Link from 'next/link'

interface Props{
    title:string
    slug:string
}

const PostTitle:FC<Props> = ({title, slug}) => {
  return (
    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
      <Link href={`/posts/${slug}`}>
        <a
          className="hover:underline text-gray-800 text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Link>
    </h3>
  )
}

export default PostTitle