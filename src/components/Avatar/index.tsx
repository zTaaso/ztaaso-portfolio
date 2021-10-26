import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 80
            height: 80
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  console.log({ avatarImage });

  return (
    <GatsbyImage
      image={avatarImage.childImageSharp.gatsbyImageData}
      alt="profile-picture"
    />
  );
};

export default Avatar;
