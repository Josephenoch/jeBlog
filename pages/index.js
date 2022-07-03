import Head from 'next/head'
import MoreStories from '../components/more-stories'
import MostRecentPost from '../Components/Home/MostRecentPost'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Featured from '../Components/Home/Featured'

export default function Index({ allPosts: { edges }, preview }) {
  const mostRecentPost = edges[0]?.node
  const morePosts = edges.slice(1)
  console.log(morePosts)

  return (
    <Layout preview={preview}>
      <Head>
        <title>JEBlog ~ Home</title>
      </Head>
      <section className="h-[70vh] flex">
        {mostRecentPost && (
            <MostRecentPost
              title={mostRecentPost.title}
              coverImage={mostRecentPost.featuredImage}
              date={mostRecentPost.date}
              slug={mostRecentPost.slug}
              excerpt={mostRecentPost.excerpt}
            />
          )}
          <div>
            {morePosts.slice(0,3).map(arr=>{
              return(
                <Featured
                title={arr.node.title}
                coverImage={arr.node.featuredImage}
                date={arr.node.date}
                slug={arr.node.slug}
                excerpt={arr.node.excerpt}
                />
                )
            })}
          </div>
      </section>
        
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
