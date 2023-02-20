// __tests__/Intro-test.js
import React from 'react';
import About from '../pages/About';
import {render} from "@testing-library/react-native";
import renderer from 'react-test-renderer';
import Details from '../pages/Details';
import CountryList from '../pages/CountryList';


describe('About', () => {
it('renders correctly the about page', () => {
  const tree = renderer
    .create(<About/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly the more details page when a country in the list is clicked', () => {
  const tree = renderer
    .create(<Details/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

})


