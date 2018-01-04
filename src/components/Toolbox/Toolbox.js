import React from 'react';
// don't think it needs props yet?
// import PropTypes from 'prop-types';
import icon from '../../assets/snail-shell.svg';
import css from './Toolbox.css';
import {
  List,
  ListItem,
  Subheader
} from 'material-ui';

const Toolbox = () => {
  return (<List>
    <Subheader style={{
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#253031'
    }}>Mental Health Resources</Subheader>
    <ListItem
      primaryText={<a
        href="https://thisismybrave.org/"
        className="toolbox-link"
        target="_blank" rel="noopener noreferrer">
        ThisIsMyBrave: Ending Mental Health Stigma</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a
        href="http://www.psychiatrictimes.com/cultural-psychiatry/my-perspective-best-mental-health-articles-2017"
        className="toolbox-link"
        target="_blank"
        rel="noopener noreferrer">
        Best Mental Health Articles of 2017</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a
        href="https://www.ted.com/topics/mental+health"
        className="toolbox-link"
        target="_blank"
        rel="noopener noreferrer">
        Mental Health TED Talks</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a
        href="https://www.nytimes.com/topic/subject/mental-health-and-disorders"
        className="toolbox-link"
        target="_blank"
        rel="noopener noreferrer">
        Mental Health New York Times Articles</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a
        href="https://www.huffingtonpost.com/topic/mental-health"
        className="toolbox-link"
        target="_blank"
        rel="noopener noreferrer">
        Mental Health HuffPost Articles</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
    <ListItem
      primaryText={<a
        href="https://www.talkspace.com/blog/2016/01/the-best-mental-health-bloggers-you-need-to-follow/"
        className="toolbox-link"
        target="_blank"
        rel="noopener noreferrer">
        Mental Health Bloggers</a>}
      leftAvatar={<img src={icon} alt="snail shell icon" height="40" width="40" />}
      style={{
        fontSize: '18px',
        fontWeight: 'bold'
      }}
    />
  </List>);
};

export default Toolbox;
