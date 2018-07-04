import React from 'react';
// import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import reactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import Home from '../client/src/components/home.jsx';
import { LandingPage } from '../client/src/components/landingPage.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<LandingPage />', () => {

  it('renders LandingPage', () => {
    window.localStorage = {};
    const landingPage = shallow(<LandingPage />);
    expect(landingPage.find('button').length).toBe(2);
  });

  it ('if token exists makes get request to server', () => {
    window.localStorage.token = 'fake_token';
    const fakeRequest = { get: jest.fn() };
    const landingPage = shallow(<LandingPage axios={fakeRequest} />);
    expect(fakeRequest.get).toBeCalled();
  });
});