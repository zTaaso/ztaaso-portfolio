import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

import * as S from './styles';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          title
          position
          author
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {siteMetadata.title}

          <S.ProfilePosition>{siteMetadata.position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{siteMetadata.description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
};

export default Profile;
