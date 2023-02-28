import styles from "../../../styles/article.module.css"

export async function generateStaticParams(){
    const res = await fetch("https://api-blog.cyclic.app/articles")
    const td = await res.json()

    return td.map((todo)=>({
        id: todo.id.toString(),
    }))
}

async function getData(id){
    const res = await fetch(`https://api-blog.cyclic.app/articles/${id}`);
    return await res.json()
}

export default async function Page({params}){
    const { id } = params

    const res = await getData(id)
    return(
        <div className={styles.container}>
            <div>
                <h2 className={styles.title}>{res.title}</h2>
            </div>
            <div>
                <p className={styles.description}>{res.description}</p>
            </div>
        </div>
    )
}