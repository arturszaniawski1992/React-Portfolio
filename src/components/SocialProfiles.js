import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = props => {

  const {link, image} = props.socialProfile;

  return (
    <div style={{display: 'inline-block', width: 50, height: 50}}>
      <a href={link}><img src={image} className="img-thumbnail" alt="Cinque Terre"/></a>
    </div>
  )

}

const SocialProfiles = () => (
  <div>
    <h4> Contact with me</h4>
    <div>
      {SOCIAL_PROFILES.map(PROFILE => {
        return (<SocialProfile key={PROFILE.id} socialProfile={PROFILE}/>)
      })}
    </div>
  </div>
)

export default SocialProfiles;

