import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

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
    <S.StyledAvatar
      image={avatarImage.childImageSharp.gatsbyImageData}
      alt="profile-picture"
    />
  );
};

export default Avatar;
