import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../src/components/Breadcrumb/Breadcrumb';
import Icon from '../src/components/Icon/Icon';

describe('Breadcrumb', () => {
  let wrapper;
  let routes = [
    {
      path: '/',
      title: undefined
    }
  ];

  it('should not render any children', () => {
    wrapper = shallow(<Breadcrumb routes={routes} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.first().hasClass('breadcrumb')).to.equal(true);
    expect(wrapper.find('h2')).to.have.length(0);
    expect(wrapper.find('span')).to.have.length(0);
    expect(wrapper.find(Icon)).to.have.length(0);
  });

  it('should shallow render itself with only a primary tag', () => {
    routes.push({
      path: 'foundations',
      title: 'Foundations'
    });

    wrapper = shallow(<Breadcrumb routes={routes} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.first().hasClass('breadcrumb')).to.equal(true);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.childAt(0).hasClass('primary')).to.equal(true);
    expect(wrapper.contains(<h2 className='primary'>Foundations</h2>)).to.equal(true);

    expect(wrapper.find('span')).to.have.length(0);

    expect(wrapper.find(Icon)).to.have.length(0);
  });

  it('should shallow render itself with a primary tag, secondary tag, and an arrow icon', () => {
    routes.push({
      path: 'colors',
      title: 'Colors'
    });

    wrapper = shallow(<Breadcrumb routes={routes} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.first().hasClass('breadcrumb')).to.equal(true);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.childAt(0).hasClass('primary')).to.equal(true);
    expect(wrapper.contains(<h2 className='primary'>Foundations</h2>)).to.equal(true);

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.childAt(2).props().className).to.equal('secondary');
    expect(wrapper.contains(<span className='secondary'>Colors</span>)).to.equal(true);

    expect(wrapper.find(Icon)).to.have.length(1);
    expect(wrapper.childAt(1).props().name).to.equal('icon-arrow-68');
    expect(wrapper.childAt(1).props().className).to.equal('icon-arrow-68');
    expect(wrapper.childAt(1).props().width).to.equal('14');
    expect(wrapper.childAt(1).props().height).to.equal('14');
    expect(wrapper.childAt(1).props().color).to.equal('#879098');
  });

  it('should shallow render itself with a primary tag, two secondary tags, and two arrow icons', () => {
    routes.push({
      path: 'test',
      title: 'Test'
    });

    wrapper = shallow(<Breadcrumb routes={routes} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.first().hasClass('breadcrumb')).to.equal(true);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.childAt(0).hasClass('primary')).to.equal(true);
    expect(wrapper.contains(<h2 className='primary'>Foundations</h2>)).to.equal(true);

    expect(wrapper.find('span')).to.have.length(2);
    expect(wrapper.childAt(2).props().className).to.equal('secondary');
    expect(wrapper.contains(<span className='secondary'>Colors</span>)).to.equal(true);

    expect(wrapper.find(Icon)).to.have.length(2);
    expect(wrapper.childAt(1).props().name).to.equal('icon-arrow-68');
    expect(wrapper.childAt(1).props().className).to.equal('icon-arrow-68');
    expect(wrapper.childAt(1).props().width).to.equal('14');
    expect(wrapper.childAt(1).props().height).to.equal('14');
    expect(wrapper.childAt(1).props().color).to.equal('#879098');

    expect(wrapper.find('span')).to.have.length(2);
    expect(wrapper.childAt(4).props().className).to.equal('secondary');
    expect(wrapper.contains(<span className='secondary'>Test</span>)).to.equal(true);

    expect(wrapper.find(Icon)).to.have.length(2);
    expect(wrapper.childAt(3).props().name).to.equal('icon-arrow-68');
    expect(wrapper.childAt(3).props().className).to.equal('icon-arrow-68');
    expect(wrapper.childAt(3).props().width).to.equal('14');
    expect(wrapper.childAt(3).props().height).to.equal('14');
    expect(wrapper.childAt(3).props().color).to.equal('#879098');
  });

  it('should shallow render and display two levels even if a root was not passed in', () => {
    routes = [
      {
        path: 'foundations',
        title: 'Foundations'
      },
      {
        path: 'test',
        title: 'Test'
      }
    ];

    wrapper = shallow(<Breadcrumb routes={routes} />);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.first().hasClass('breadcrumb')).to.equal(true);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.childAt(0).hasClass('primary')).to.equal(true);
    expect(wrapper.contains(<h2 className='primary'>Foundations</h2>)).to.equal(true);

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.childAt(2).props().className).to.equal('secondary');
    expect(wrapper.contains(<span className='secondary'>Test</span>)).to.equal(true);
  });
});
