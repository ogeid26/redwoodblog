import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const ArticlePage = () => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <ArticlesCell />



    </>
  )
}

export default ArticlePage
