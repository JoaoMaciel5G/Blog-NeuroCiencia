import styles from "../../../styles/article.module.css"

const url = process.env.NEXT_PUBLIC_URL

export async function generateStaticParams(){
    const res = await fetch(url)
    const td = await res.json()

    return td.map((todo)=>({
        id: todo.id.toString(),
    }))
}

async function getData(id){
    const res = await fetch(`${url}/${id}`);
    return await res.json()
}

export default async function Page({params}){
    const { id } = params

    const res = await getData(id)
    return(
        <main className={styles.container}>
            <div>
                <h2 className={styles.title}>{res.title}</h2>
            </div>
            <div>
                <p className={styles.description}>{res.description}</p>
            </div>
        </main>
    )
}