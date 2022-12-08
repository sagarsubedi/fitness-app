import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
import LoginScreen from './screens/LoginScreen';
import CalculateScreen from './screens/CalculateScreen';
import ProfileScreen from './screens/ProfileScreen';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

describe('<CalculateScreen />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<CalculateScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

describe('<LoginScreen />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});



