import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '../index'
beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
})
test('test button', () => {
    // 渲染组件
    const button = shallow(<Button>test</Button>);
    expect(button.text()).toEqual('cube.svg');
    expect(button.find(ButtonBase)).toHaveLength(1)
    // 触发事件
    button.find(ButtonBase).simulate('click');
    expect(button.text()).toEqual('cube.svg');
});

