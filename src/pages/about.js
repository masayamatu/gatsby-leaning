import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUtensils,faCheckSquare} from "@fortawesome/free-solid-svg-icons"

export default function Home({data}) {
  return (
    <div>
    {/* Hello world */}
    <div className="awesome" style={{border: '1px solid red'}}>
      <label htmlFor="name">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>ESSENTIALS</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" integrity="sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv" crossOrigin="anonymous" />
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="images/icon.png" type="image/png" />
        <Layout>
         <div className="eyecatch">
           <figure>
             <Img fluid = {data.about.childImageSharp.fluid} 
              
              alt="ブルーベリー&ヨーグルト"/>            
           </figure>
         </div>

         <article className="content">
          <div className="container">
           <h1 className="bar">ESSENTIALSについて</h1>
           <aside className="info">
            <div className="subtitle">
              <FontAwesomeIcon icon={faUtensils} />
              ABOUT ESSENTIALS
            </div>
           </aside>
           <div className="postbody">
             <p>
               体に必要不可欠な食べ物についての情報を発信しているサイトです。
               「美味しい食材を美味しく食べる」をモットーにしています。
               特に力を入れているのが、フルーツ、穀物、飲み物の３つです。
             </p>
             <h2><FontAwesomeIcon icon = {faCheckSquare} />
             公開している記事</h2>
             <p>これらについて、次のような記事やレシピなどを書いて後悔しています。</p>

             <ul>
               <li>ヘルシーで美味しい料理の研究・レビュー・レシピ。</li>
               <li>一人でも、家族や友人と一緒にでも楽しめる料理。</li>
               <li>ユーザー間のオープンなコミュニケーションを基盤としあ情報。</li>
             </ul>

             <h2><FontAwesomeIcon icon={faCheckSquare} />よく聞かれること</h2>
             <p>よく聞かれることなのですが、私たちはスタートアップではありません。
               私たちはまだスタートしたばかりで、より多くの人々が食べやすい食べ物が
               もたらす違いを発見できるように、成長しサービスを改善する機会を待っています。
             </p>
             <p>気長にお付き合いいただければ幸いです。</p>
           　</div>
           </div>
         </article>
        </Layout>
        Enter your name: </label>
      <input type="text" id="name" />
    </div>
    <p>Enter your HTML here</p>
  </div>
  )
}
export const query = graphql`
query {
  about:file(relativeDirectory: {}, relativePath: {eq: "about.jpg"}, childImageSharp: {fluid: {sizes: {}}}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`
