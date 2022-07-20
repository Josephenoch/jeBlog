import React, { FC } from 'react'

import Image from 'next/image'
import { ICategoryNode, IFeaturedImageNode } from '../../interfaces/allPosts'
import PostTitle from '../GeneralComponents/PostTitle'
import getMins from '../../helpers/getMins'
import Link from 'next/link'
import {BsArrowRight} from "react-icons/bs"
interface Props{
  title:string
  coverImage:IFeaturedImageNode,
  excerpt:string,
  slug:string,
  categories:ICategoryNode,
  content:string
}

const MostRecentPost:FC<Props> = ({
  title,
  coverImage,
  excerpt,
  slug,
  categories,
  content
}) => {
  const time = getMins(content)
  return (
    <section className="flex w-full justify-between border-2 h-[30rem] p-2 rounded-md border-gray-200 ">
      <div className="mb-8 w-[44.5%] relative h-full">
        {<Image src={coverImage?.node.sourceUrl} layout="fill"/>}
      </div>
      <div className="w-[54.5%] ">
        <PostTitle title={title} slug={slug}/>
        <div className="flex flex-col space-between h-[80%] pr-2">
          <div
            className="text-sm h-[90%] space-y-10 inline-block leading-relaxed mb-4 text-gray-700 text-justify"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
          <div className="h-[10%] flex justify-between">
            <span className="text-xs text-gray-600">{time} Mins Read</span>
            <Link href={`/posts/${slug}`}>
              <a className="text-xs text-[#1473E6] flex items-center space-x-1">
                <span>Read More</span>
                <BsArrowRight/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MostRecentPost