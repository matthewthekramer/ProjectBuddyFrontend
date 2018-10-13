import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, Spinner, CardSection, Button, Input, Cardsection } from './common';
import { loginChanged, passwordChanged, submit } from '../actions/SubmitActions';

class SubmitForm extends Component {
  onLoginChange(text) {
    this.props.loginChanged(text);
  }

  onButtonPress() {
    const { login, password } = this.props;
    this.props.submit({ login, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Find Buddies
        </Button>
    );
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
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
      login: state.githubLogin,
      loading: state.loading
  };
};

export default connect(mapStateToProps, {
  loginChanged, submit })(SubmitForm);
