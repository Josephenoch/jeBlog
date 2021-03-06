// import { useRouter } from 'next/router'
// import ErrorPage from 'next/error'
// import PostBody from '../../components/post-body'
// import MoreStories from '../../components/more-stories'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import SectionSeparator from '../../components/section-separator'
// import Layout from '../../components/layout'
// import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
// import PostTitle from '../../components/post-title'
// import Head from 'next/head'
// import { CMS_NAME } from '../../lib/constants'
// import Tags from '../../components/tags'

// export default function Post({ post, posts, preview }) {
//   const router = useRouter()
//   const morePosts = posts?.edges

//   if (!router.isFallback && !post?.slug) {
//     return <ErrorPage statusCode={404} />
//   }

//   return (
//     <Layout preview={preview}>
//         <Header />
//         {router.isFallback ? (
//           <PostTitle>Loading…</PostTitle>
//         ) : (
//           <>
//             <article>
//               <Head>
//                 <title>
//                   {post.title} | Next.js Blog Example with {CMS_NAME}
//                 </title>
//                 <meta
//                   property="og:image"
//                   content={post.featuredImage?.sourceUrl}
//                 />
//               </Head>
//               <PostHeader
//                 title={post.title}
//                 coverImage={post.featuredImage}
//                 date={post.date}
//                 author={post.author}
//                 categories={post.categories}
//               />
//               <PostBody content={post.content} />
//               <footer>
//                 {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
//               </footer>
//             </article>

//             <SectionSeparator />
//             {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//           </>
//         )}
//     </Layout>
//   )
// }

// export async function getStaticProps({ params, preview = false, previewData }) {
//   const data = await getPostAndMorePosts(params.slug, preview, previewData)

//   return {
//     props: {
//       preview,
//       post: data.post,
//       posts: data.posts,
//     },
//     revalidate: 10,
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug()

//   return {
//     paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
//     fallback: true,
//   }
// }

const Post = ()=>{
  return (
    <div>
      Hi
    </div>
  )
}

export default Post