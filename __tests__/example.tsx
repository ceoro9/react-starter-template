import React       from 'react';
import { shallow } from 'enzyme';
import App         from '../src/app/App';

describe('AppComponent', () => {
  it('should render', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });
});
