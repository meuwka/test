import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Checkbox3 from './checkbox3';

function getRenderCheckbox3() {
  let mapProcessorDtoToModel = {
    true: 'yes',
    false: 'no',
  };

  let mapProcessorModelToDto = {
    yes: true,
    no: false,
    unknown: '',
  };

  return field => {
    let { input } = field;

    return (
      <Checkbox3
        {...input}
        value={mapProcessorDtoToModel[input.value] || 'unknown'}
        onChangeCheckbox={value =>
          input.onChange(mapProcessorModelToDto[value])}
      />
    );
  };
}

class App extends Component {
  componentWillMount() {
    this.props.initialize({ name1: false })
  }

  submit = data => {
    console.log(data);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        name="createCustomerRole"
        onSubmit={handleSubmit(this.submit)}
      >
        <Field
          type="checkbox"
          name='name1'
          component={getRenderCheckbox3()}
        />
      </form>
    );
  }
}

App = reduxForm({
  form: 'createCustomerRole',
})(App);

export default App;