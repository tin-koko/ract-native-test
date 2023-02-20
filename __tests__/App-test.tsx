import React from 'react';
import About from '../pages/About';
import renderer from 'react-test-renderer';
import Details from '../pages/Details';


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


