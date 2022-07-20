export interface IAllPosts{
    title:string,
    excerpt:string,
    slug:string,
    date:Date,
    categories:{
        edges:ICategoryNode
    }
    featuredImage:IFeaturedImageNode,
    author:IAuthorNode,
    content:string
}

export interface IFeaturedImageNode{
    node:IFeaturedImage
}

interface IFeaturedImage{
    sourceUrl:string
}

interface IAuthorNode{
    node:IAuthor
}
interface IAuthor{
    name:string,
    firstName:string|null,
    lastName:string|null,
    avatar:IAvatar
}

interface IAvatar{
    url:string
}

interface ICategory{
    name:string
}

export interface ICategoryNode{
    node:ICategory[]
}