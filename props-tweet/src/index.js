import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';


function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
      <NameWithHandle author={tweet.author}/>
      <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}
/*function Avatar(){
    return(
        <img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
    );
}*/
function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}
/*function Message(){
    return(
        <div className="message">
           This is less than 140 characters.
        </div>
    );
}*/
function Message({ text }) {
    return (
      <div className="message">
        {text}
      </div>
    );
  }
/*function NameWithHandle(){
    return(
        <span className="name-with-handle">
            <span className="name">Your name </span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}
const Time = () => (
    <span className="time">3h ago</span>
  );*/
  function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
      <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
      </span>
    );
  }
  
  
  const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
      <span className="time">
        {timeString}
      </span>
    );
  
  }
  const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
  );
  
  const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
  );
  
  const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
  );
  
  const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
  );
ReactDOM.render(<Tweet />,document.querySelector('#root'));