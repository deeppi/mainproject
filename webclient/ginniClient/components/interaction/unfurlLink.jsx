import React from 'react';
import Embedly from 'react-embedly';

export default class UnfurlLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('link.'+this.props.url);
    return(
      <Embedly url={this.props.url} apiKey="8956f890638a46888963d76b17ae451a"/>
    );
  }
}
