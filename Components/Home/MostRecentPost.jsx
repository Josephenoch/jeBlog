import React from 'react'

import Date from '../date'
import CoverImage from '../cover-image'
import Link from 'next/link'
import Image from 'next/image'

const MostRecentPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {
  return (
    <section className="flex flex-col w-[60%]">
      <div className="mb-8">
        {coverImage && <Image src={coverImage?.node.sourceUrl} height={400} width={780}/>}
      </div>
      <div>
        <div className="mb-4 md:mb-0 font-bold text-gray-400">
              <Date dateString={date} />
        </div>
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