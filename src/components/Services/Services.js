import React, { Component } from 'react';
import {
  ServicesStyled,
  ServicesItemStyled,
  ServicesIconStyled,
  ServicesInfoStyled,
  ServicesNameStyled,
  ServicesDescStyled
} from './Services.styles';

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: []
    };
  }

  componentDidMount() {
    fetch('/data/services.json')
      .then(this.handleResponse)
      .then(this.handleJson.bind(this))
      .catch(this.handleError);
  }

  handleResponse(response) {
    if (!response.ok) {
      throw new Error('Error: [' + response.status + '] ' + response.statusText);
    }

    return response.json();
  }

  handleJson(json) {
    this.setState({
      services: json.services
    });
  }

  handleError(error) {
    console.error(error.message);
  }

  render() {
    const { services } = this.state;

    return (
      <ServicesStyled>
        {services.map((service, index) => {
          return (
            <ServicesItemStyled key={index}>
              <ServicesIconStyled type={service.icon} />
              <ServicesInfoStyled>
                <ServicesNameStyled>{service.name}</ServicesNameStyled>
                <ServicesDescStyled>{service.description}</ServicesDescStyled>
              </ServicesInfoStyled>
            </ServicesItemStyled>
          );
        })}
      </ServicesStyled>
    );
  }
}

export { Services };
