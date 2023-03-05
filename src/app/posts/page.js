import styles from "../../styles/posts.module.css"
import Link from 'next/link'

const url = process.env.NEXT_PUBLIC_URL

async function getTitlesArticles(){
  const res = await fetch(url);
  return await res.json()
}
export default async function Posts() {
  const res = await getTitlesArticles()

    return (
      <main className={styles.container}>
        <div className={styles.title}>
          <h2>Artigos</h2>
        </div>
        <div>
          <ul>
            {res.map((article) => {
              return(
                <li key={article.id}>
                  <Link className={styles.link} href={`/posts/${article.id}`}>{article.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    );
}