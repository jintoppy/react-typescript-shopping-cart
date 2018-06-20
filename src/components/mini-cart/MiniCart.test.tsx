import * as React from 'react';
import MiniCart from './MiniCart';
import { shallow } from 'enzyme';

describe('MiniCart', () => {
    it('should render', () => {
        const props = {
            cart: []
        }
        const component = shallow(<MiniCart cart={props.cart} />);
        expect(component.length).toBe(1);
    });
    it('should display the count', () => {
        const props = {
            cart: [{id: 1, productId: 1, quantity: 1}]
        }
        const component = shallow(<MiniCart cart={props.cart} />);
        expect(component.find('span').text()).toBe('You have 1 items in your cart');
    });
});