import React, { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { IFeaturedImageNode } from '../../interfaces/allPosts'

interface Props{
  title:string
  coverImage:IFeaturedImageNode,
  excerpt:string,
  slug:string
}

const MostRecentPost:FC<Props> = ({
  title,
  coverImage,
  excerpt,
  slug,
}) => {
  return (
    <section className="flex flex-col w-[60%]">
      <div className="mb-8">
        {coverImage && <Image src={coverImage?.node.sourceUrl} height={400} width={780}/>}
      </div>
      <div>
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a
                className="hover:underline text-gray-800 text-2xl font-bold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
        </div>
        <div>
          <div
            className="text-sm leading-relaxed mb-4 text-gray-500 font-semibold"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  )
}

export default MostRecentPost