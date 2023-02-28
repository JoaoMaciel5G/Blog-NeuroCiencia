import styles from "../styles/page.module.css"
import Image from "next/image";
import brain from "../assets/imageBrain.jpg";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.presentation}>
        <p>
          A neurociência é o estudo do sistema nervoso, incluindo o cérebro,
          medula espinhal, e nervos. É uma área interdisciplinar que combina
          elementos de biologia, psicologia, medicina para entender como o
          sistema nervoso funciona, como ele influencia o comportamento e como
          ele pode ser afetado por doenças e lesões
        </p>
        <p>
          A neurociência investiga questões como: como o neurônios se comunicam
          entre si, como o cérebro processa as informações sensoriais, como a
          memória é formada e mantida, como o cérebro controla o comportamento,
          e como doenças afetam o cérebro
        </p>
        <p>
          A neurociência explica através dos seus conceitos e anos de estudo,
          até mesmo como você pode mudar o seu comportamento, e mudar sua
          rotina, e mudar seus hábitos, assim se tornando uma pessoa mais
          produtiva e com mais excelência no que faz.
        </p>
        <p>
          Aqui você vai ler artigos, postagens e curiosidades da neurociência,
          de comportamento e até de doenças como depressão, ansiedade, TDAH
          e muito mais, e aprender como manejar isso tudo e se tornar alguém
          melhor e mais produtivo.
        </p>
      </div>
      <div className={styles.divImage}>
        <Image src={brain} alt="cerebro" />
      </div>
    </main>
  );
}
