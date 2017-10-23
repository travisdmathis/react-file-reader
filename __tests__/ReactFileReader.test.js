import React from 'react';
import ReactFileReader from '../ReactFileReader';
import { mount } from 'enzyme';

test('the base component renders', () => {
  const component = mount(
    <ReactFileReader elementId='test-render' handleFiles={() => ''}>
      <p>Upload</p>
    </ReactFileReader>
  );

  expect(component).toMatchSnapshot();
  expect(component.props().multipleFiles).toEqual(false)
  expect(component.props().base64).toEqual(false)
  expect(component.props().fileTypes).toEqual('image/*')
});

test('returns base64 image', () => {
  const component = mount(
    <ReactFileReader base64={true} elementId='test-render' handleFiles={() => ''}>
      <p>Upload</p>
    </ReactFileReader>
  );

  expect(component).toMatchSnapshot();
  expect(component.props().base64).toEqual(true);
});

test('accepts multiple files', () => {
  const component = mount(
    <ReactFileReader multipleFiles={true} elementId='test-render' handleFiles={() => ''}>
      <p>Upload</p>
    </ReactFileReader>
  );

  expect(component).toMatchSnapshot();
  expect(component.props().multipleFiles).toEqual(true)
  expect(component.props().base64).toEqual(false)
  expect(component.props().fileTypes).toEqual('image/*')
});

test('accepted file type should be csv', () => {
  const component = mount(
    <ReactFileReader fileTypes='.csv' elementId='test-render' handleFiles={() => ''}>
      <p>Upload</p>
    </ReactFileReader>
  );

  expect(component).toMatchSnapshot();
  expect(component.props().multipleFiles).toEqual(false);
  expect(component.props().base64).toEqual(false);
  expect(component.props().fileTypes).toEqual('.csv');
})

test('accepted file type should be csv or image/*', () => {
  const component = mount(
    <ReactFileReader fileTypes={['.csv', 'image/*']} elementId='test-render' handleFiles={() => ''}>
      <p>Upload</p>
    </ReactFileReader>
  );

  expect(component).toMatchSnapshot();
  expect(component.props().multipleFiles).toEqual(false);
  expect(component.props().base64).toEqual(false);
  expect(component.props().fileTypes).toEqual([".csv", "image/*"]);
})
