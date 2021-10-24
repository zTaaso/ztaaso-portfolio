import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar';

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
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{`${siteMetadata.title}oi`}</h1>
      <h2>{siteMetadata.position}</h2>
      <p>{siteMetadata.description}</p>
    </div>
  );
};

export default Profile;
