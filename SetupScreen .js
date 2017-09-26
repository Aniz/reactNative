class SetupScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Setup',
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Button
        title="Go back to home tab"
        onPress={() => goBack()}
      />
    );
  }
}