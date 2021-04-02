import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import HeaderContact from "../components/header-contact";
import Seo from "../components/seo";

const GalleryPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Gallery - Priest Sheet Metal &amp; Plate Christchurch" />
      <HeaderContact />
      <main className="gallery-width">
        <h1 className="text-center">Gallery</h1>

        <ul className="blocks-gallery-grid">
          {data.allStrapiGalleries.edges.map((document) => (
            <li className="gallerygallery">
              <GatsbyImage
                image={
                  document.node.galleryImage.childImageSharp.gatsbyImageData
                }
              />
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GalleryQuery {
    allStrapiGalleries(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          alt

          galleryImage {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;

export default GalleryPage;
