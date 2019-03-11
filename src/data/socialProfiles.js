import emailIcon from '../assets/email_icon.png'
import gitHubIcon from '../assets/github_icon.png'
import linkedInIcon from '../assets/linkedin_icon.png'

const profile1 = {
  id: 1,
  link: 'mailto:artur.szaniawski@gmail.com',
  image: emailIcon,
};

const profile2 = {
  id: 2,
  link: 'https://github.com/arturszaniawski1992?tab=repositories',
  image: gitHubIcon,

};

const profile3 = {
  id: 3,
  link: 'https://www.linkedin.com/in/artur-szaniawski/',
  image: linkedInIcon,

}


const SOCIAL_PROFILES = [profile1, profile2, profile3];

export default SOCIAL_PROFILES;
