import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Featured = ({
    title,
    coverImage,
    date,
    excerpt,
    slug,
  }) => {
  return (
    <section className="h-[30%] flex space-x-2">
        {/* <Image src={coverImage?.node.sourceUrl} height={100} width={100}/> */}
        <aside>
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a
                className="hover:underline text-gray-800 text-2xl font-bold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
        </h3>
        </aside>
    </section>
     
  )
}

export default Featured