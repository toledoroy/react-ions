import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router'
import Node from '../src/components/Nav/Node';
import Icon from '../src/components/Icon/Icon'

describe('Node', () => {

  const nodes = [
    {
      name: 'Colors',
      route: '/foundations/colors'
    }, {
      name: 'Editor',
      external: true,
      route: 'https://cdn.getambassador.com/index.html?mbsy_editor=true'
    }
  ];

  const nodeWithIcon = [
    {
      name: 'Colors',
      route: '/foundations/colors',
      icon: 'icon-check-1-1'
    }
  ];

  const children = [
    {
      name: 'Children Test',
      route: '/foundations/children'
    }, {
      name: 'External Child',
      external: true,
      route: 'https://cdn.getambassador.com/index.html?mbsy_editor=true'
    }
  ];

  it('should render a single node', () => {
    const wrapper = shallow(<Node node={nodes[0]} />);
    expect(wrapper.childAt(0).childAt(0).childAt(0).text()).to.equal(nodes[0].name);
    expect(wrapper.childAt(0).childAt(0).props().to).to.equal(nodes[0].route);
  });

  it('should render a single external node', () => {
    const wrapper = shallow(<Node node={nodes[1]} />);
    expect(wrapper.childAt(0).childAt(0).childAt(0).text()).to.equal(nodes[1].name);
    expect(wrapper.childAt(0).childAt(0).props().href).to.equal(nodes[1].route);
    expect(wrapper.childAt(0).childAt(0).props().target).to.equal('_blank');
  });

  it('should render a group of children when parent is external', () => {
    const wrapper = shallow(<Node node={nodes[0]} children={children} />);
    expect(wrapper.childAt(0).find('ul').children()).to.have.length(children.length);
  });

  it('should render an icon component with an additional class', () => {
    const wrapper = shallow(<Node node={nodes[0]} children={children} />);
    // check that iconParent exists (classname on ul)
  });

  it.skip('should render a group of children when parent is internal', () => {
    const wrapper = shallow(<Node node={nodes[1]} children={children} />);
    expect(wrapper.childAt(0).find('ul').children()).to.have.length(children.length);
    // check that iconParent exists (classname on ul)
  });

});
