import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

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
        <SEO />
        <section className="hero">
          <figure>
            <Img fluid={data.hero.childImageSharp.fluid} alt="" 
            style={{height:"100%"}}
            />
          </figure>
          <div className="catch">
            <h1>There is no love sincerer than<br /> the love of food.</h1>
            <p>食物を愛するよりも誠実な愛はない ― バーナード・ショー</p>
          </div>
          <div className="wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1366 229.5"
              fill="#fff"
            >
             <path
               d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
               opacity=".53"
              />
              <path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z"/>
            </svg>
          </div>
        </section>
        <section className="food">
          <div className="container">
            <h2 className="bar">Food <span>Essence</span></h2>
            <div className="details">
              <div className="detail">
                <figure>
                  <Img fluid={data.fruit.childImageSharp.fluid} alt="" />
                </figure>
                <h3>フルーツ</h3>
                <p>FRUIT</p>
                <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
              </div>
              <div className="detail">
                <figure>
                  <Img fluid={data.grain.childImageSharp.fluid} alt="" />
                </figure>
                <h3>穀物</h3>
                <p>GRAIN</p>
                <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
              </div>
              <div className="detail">
                <figure>
                  <Img fluid={data.beverage.childImageSharp.fluid} alt="" />
                </figure>
                <h3>飲み物</h3>
                <p>BEVERAGE</p>
                <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
              </div>
            </div>
          </div>
        </section>
        <section className="photo">
          <h2 className="sr-only">Photo</h2>
          <figure>
            <Img fluid={data.berry.childImageSharp.fluid} 
             alt="赤く熟したベリー" 
             style = {{height:"100%"}}
             />
          </figure>
        </section>
        </Layout>
        Enter your name: </label>
      <input type="text" id="name" />
    </div>
    <p>Enter your HTML here</p>
  </div>
  )
}
export const query = graphql`
query MyQuery {
  hero:file(relativeDirectory: {}, relativePath: {eq: "hero.jpg"}, childImageSharp: {fluid: {sizes: {}}}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fruit:file(relativeDirectory: {}, relativePath: {eq: "fruit.jpg"}, childImageSharp: {fluid: {sizes: {}}}) {
    childImageSharp {
      fluid(maxWidth: 320) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  grain:file(relativeDirectory: {}, relativePath: {eq: "grain.jpg"}, childImageSharp: {fluid: {sizes: {}}}) {
    childImageSharp {
      fluid(maxWidth: 320) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  beverage:file(relativeDirectory: {}, relativePath: {eq: "beverage.jpg"}, childImageSharp: {fluid: {sizes: {}}}) {
    childImageSharp {
      fluid(maxWidth: 320) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  berry:file(relativeDirectory: {}, relativePath: {eq: "berry.jpg"}, childImageSharp: {fluid: {sizes: {}}}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`
