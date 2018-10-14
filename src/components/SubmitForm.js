import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { Card, Spinner, CardSection, Button, Input, Cardsection, FlatListBasics } from './common';
import { loginChanged, passwordChanged, submit } from '../actions/SubmitActions';

class SubmitForm extends Component {
  state = {showList: false};
  onLoginChange(text) {
    this.props.loginChanged(text);
  }

  onButtonPress() {
    const { login, password } = this.props;
    this.props.submit({ login, password });
    state = {showList: true};

    this.setState({loaded: true});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
      /*<FlatListBasics/>*/
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Find Buddies
      </Button>
    );
  }

  renderList() {
    if (this.props.loaded) {
      return <FlatListBasics/>;
    }
  }

  render() {
    return (
      <Card style={{ marginTop: 80 }}>
        <Text style={{ paddingTop: 40 }} />

        <CardSection>
          <Input
            label="Github Login"
            placeholder="coderd00d@gmail.com"
            onChangeText={this.onLoginChange.bind(this)}
            value={this.props.login}
          />
          {this.renderList()}
        </CardSection>

        <CardSection>
        {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const listRedux = state => {
  retu
}

const mapStateToProps = state => {
  return {
      login: state.githubLogin,
      loading: state.loading,
      loaded: state.loaded
  };
};

export default connect(mapStateToProps, {
  loginChanged, submit })(SubmitForm);
