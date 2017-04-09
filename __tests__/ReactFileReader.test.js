import React from 'react';
import ReactFileReader from '../ReactFileReader';
import renderer from 'react-test-renderer';

test('the component renders', () => {
  const component = renderer.create(
    <ReactFileReader handleFiles={() => ''}>
      <p>Upload</p>
    </ReactFileReader>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
