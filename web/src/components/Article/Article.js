import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <article>
      <header>
        <h1>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h1>
      </header>
      <p>{article.body}</p>
      <div>Posted At: {article.createdAt}</div>
    </article>
  )
}

export default Article
