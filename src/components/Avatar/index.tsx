import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 60, height: 60)
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

  return (
    <StaticImage
      // image={avatarImage.childImageSharp.fixed}
      src="../../images/profile-photo.jpg"
      alt="profile-picture"
    />
  );
};

export default Avatar;
