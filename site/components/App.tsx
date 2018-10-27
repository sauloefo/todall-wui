import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

import SvgIcon from '@material-ui/core/SvgIcon';
function HomeIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

import Icon from '@material-ui/core/Icon';

const App = class extends Component {
  render() {
    return <div>
      <HomeIcon />
      <Icon color="primary">
        add_circle
      </Icon>
      <Typography variant="h1">Hello React App!</Typography>
    </div>;
  }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);