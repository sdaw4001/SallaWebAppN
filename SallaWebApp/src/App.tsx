import * as React from 'react';
import './App.css';

import LandingPage from './components/Content/LandingPage';
import LoadingPage from './components/LandingPage/LoadingPage';



class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  public componentDidMount() {
    setTimeout(
      () => this.setState({ isLoading: !this.state.isLoading }),
      2000,
    );
  }

  public render() {

    if (this.state.isLoading) {
      return (
        <LoadingPage />
      );
    } else {
      return (
          <div>
            <LandingPage/>
          </div>
      );
    }
  }
}

export default App;
