import Head from 'next/head'
import MostRecentPost from '../components/Home/MostRecentPost'
import { getAllPostsForHome } from '../lib/api'
import Featured from '../components/Home/Featured'
import { GetStaticProps } from 'next'

interface Props{
  preview:boolean
  allPosts:any
}

const Index = ({ allPosts: { edges }, preview }:Props) => {
  const mostRecentPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <>
      <Head>
        <title>JEBlog ~ Home</title>
      </Head>
      <div className="h-[70vh] flex">
        {mostRecentPost && (
            <MostRecentPost
              title={mostRecentPost.title}
              coverImage={mostRecentPost.featuredImage}
              date={mostRecentPost.date}
              slug={mostRecentPost.slug}
              excerpt={mostRecentPost.excerpt}
            />
          )}
          <section>
            {morePosts.slice(0,3).map((arr:any,index:number)=>{
              return(
                <Featured
                key={index}
                title={arr.node.title}
                coverImage={arr.node.featuredImage}
                date={arr.node.date}
                slug={arr.node.slug}
                excerpt={arr.node.excerpt}
                />
                )
            })}
          </section>

          
      </div>
    </>     
  )
}

export default Index

export const getStaticProps:GetStaticProps = async({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
