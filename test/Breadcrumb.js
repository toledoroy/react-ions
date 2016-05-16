import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
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

  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      const evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  afterEach(function() {
    const elems = document.body.children;
    if (elems.length > 0) {
      document.body.removeChild(elems[elems.length -1]);
    }
  });

  it('should not render any children', () => {
    wrapper = shallow(<Breadcrumb routes={routes} />);
    expect(wrapper.find('div')).to.have.length(2);
    expect(wrapper.childAt(0).hasClass('breadcrumb')).to.equal(true);
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
    expect(wrapper.find('div')).to.have.length(2);
    expect(wrapper.childAt(0).hasClass('breadcrumb')).to.equal(true);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.childAt(0).childAt(0).hasClass('primary')).to.equal(true);
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
    expect(wrapper.find('div')).to.have.length(2);
    expect(wrapper.childAt(0).hasClass('breadcrumb')).to.equal(true);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.childAt(0).childAt(0).hasClass('primary')).to.equal(true);
    expect(wrapper.contains(<h2 className='primary'>Foundations</h2>)).to.equal(true);

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.childAt(0).childAt(2).props().className).to.equal('secondary');
    expect(wrapper.contains(<span className='secondary'>Colors</span>)).to.equal(true);

    expect(wrapper.find(Icon)).to.have.length(1);
    expect(wrapper.childAt(0).childAt(1).props().name).to.equal('icon-arrow-68');
    expect(wrapper.childAt(0).childAt(1).props().className).to.equal('icon-arrow-68');
    expect(wrapper.childAt(0).childAt(1).props().width).to.equal('14');
    expect(wrapper.childAt(0).childAt(1).props().height).to.equal('14');
    expect(wrapper.childAt(0).childAt(1).props().color).to.equal('#879098');
  });

  it('should shallow render itself with a primary tag, two secondary tags, and two arrow icons', () => {
    routes.push({
      path: 'test',
      title: 'Test'
    });

    wrapper = shallow(<Breadcrumb routes={routes} />);
    expect(wrapper.find('div')).to.have.length(2);
    expect(wrapper.childAt(0).hasClass('breadcrumb')).to.equal(true);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.childAt(0).childAt(0).hasClass('primary')).to.equal(true);
    expect(wrapper.contains(<h2 className='primary'>Foundations</h2>)).to.equal(true);

    expect(wrapper.find('span')).to.have.length(2);
    expect(wrapper.childAt(0).childAt(2).props().className).to.equal('secondary');
    expect(wrapper.contains(<span className='secondary'>Colors</span>)).to.equal(true);

    expect(wrapper.find(Icon)).to.have.length(2);
    expect(wrapper.childAt(0).childAt(1).props().name).to.equal('icon-arrow-68');
    expect(wrapper.childAt(0).childAt(1).props().className).to.equal('icon-arrow-68');
    expect(wrapper.childAt(0).childAt(1).props().width).to.equal('14');
    expect(wrapper.childAt(0).childAt(1).props().height).to.equal('14');
    expect(wrapper.childAt(0).childAt(1).props().color).to.equal('#879098');

    expect(wrapper.find('span')).to.have.length(2);
    expect(wrapper.childAt(0).childAt(4).props().className).to.equal('secondary');
    expect(wrapper.contains(<span className='secondary'>Test</span>)).to.equal(true);

    expect(wrapper.find(Icon)).to.have.length(2);
    expect(wrapper.childAt(0).childAt(3).props().name).to.equal('icon-arrow-68');
    expect(wrapper.childAt(0).childAt(3).props().className).to.equal('icon-arrow-68');
    expect(wrapper.childAt(0).childAt(3).props().width).to.equal('14');
    expect(wrapper.childAt(0).childAt(3).props().height).to.equal('14');
    expect(wrapper.childAt(0).childAt(3).props().color).to.equal('#879098');
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
    expect(wrapper.find('div')).to.have.length(2);
    expect(wrapper.childAt(0).hasClass('breadcrumb')).to.equal(true);

    expect(wrapper.find('h2')).to.have.length(1);
    expect(wrapper.childAt(0).childAt(0).hasClass('primary')).to.equal(true);
    expect(wrapper.contains(<h2 className='primary'>Foundations</h2>)).to.equal(true);

    expect(wrapper.find('span')).to.have.length(1);
    expect(wrapper.childAt(0).childAt(2).props().className).to.equal('secondary');
    expect(wrapper.contains(<span className='secondary'>Test</span>)).to.equal(true);
  });

  it('should display minimized breadcrumbs when there\'s not enough space after resize', () => {
    routes = [
      {
        path: 'first',
        title: 'First'
      },
      {
        path: 'second',
        title: 'Second'
      },
      {
        path: 'third',
        title: 'Third'
      }
    ];

    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = ReactDOM.render(<Breadcrumb routes={routes} />, div);
    const containerDiv = ReactDOM.findDOMNode(div);

    // 3 breadcrumbs and 2 arrow icons
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(5);
    // All but the last breadcrumb
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(2);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');

    // Reduce the width of the breadcrumbs container
    containerDiv.style.width = '100px';
    // Trigger window resize event
    eventFire(window, 'resize');

    // Ellipsis, an arrow icon, and a breadcrumb
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(3);
    // All but the last breadcrumb
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(2);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');
  });

  it('should display minimized breadcrumbs when there\'s not enough space on initial load', () => {
    routes = [
      {
        path: 'first',
        title: 'First'
      },
      {
        path: 'second',
        title: 'Second'
      },
      {
        path: 'third',
        title: 'Third'
      }
    ];

    const div = document.createElement('div');
    // Set the container width right away
    div.style.width = '100px';
    document.body.appendChild(div);
    const component = ReactDOM.render(<Breadcrumb routes={routes} />, div);

    // Ellipsis, an arrow icon, and a breadcrumb
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(3);
    // All but the last breadcrumb
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(2);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');
  });

  it('should open the dropdown with the hidden breadcrumbs when a click occurs on the ellipsis and close the dropdown if another click occurs', () => {
    routes = [
      {
        path: 'first',
        title: 'First'
      },
      {
        path: 'second',
        title: 'Second'
      },
      {
        path: 'third',
        title: 'Third'
      }
    ];

    const div = document.createElement('div');
    div.style.width = '100px';
    document.body.appendChild(div);
    let component = ReactDOM.render(<Breadcrumb routes={routes} />, div);

    // Ellipsis, an arrow icon, and a breadcrumb
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(3);
    // All but the last breadcrumb
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(2);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');

    // Trigger a click on the ellipsis element
    eventFire(document.body.getElementsByClassName('ellipsis')[0], 'click');

    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.not.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('1');

    // Trigger a click on the ellipsis element
    eventFire(document.body.getElementsByClassName('ellipsis')[0], 'click');

    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');
  });

  it('should close the hidden breadcrumbs dropdown if a click occurs anywhere in the document', () => {
    routes = [
      {
        path: 'first',
        title: 'First'
      },
      {
        path: 'second',
        title: 'Second'
      },
      {
        path: 'third',
        title: 'Third'
      }
    ];

    const div = document.createElement('div');
    div.style.width = '100px';
    document.body.appendChild(div);
    const component = ReactDOM.render(<Breadcrumb routes={routes} />, div);

    // Ellipsis, an arrow icon, and a breadcrumb
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(3);
    // All but the last breadcrumb
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(2);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');

    // Trigger a click on the ellipsis element
    eventFire(document.body.getElementsByClassName('ellipsis')[0], 'click');

    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.not.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('1');

    // Trigger a click on the body element
    eventFire(document.body, 'click');

    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');
  });

  it('should close the dropdown with the hidden breadcrumbs if a resize happens and there\'s enough space for all of the breadcrumbs', () => {
    routes = [
      {
        path: 'first',
        title: 'First'
      },
      {
        path: 'second',
        title: 'Second'
      },
      {
        path: 'third',
        title: 'Third'
      }
    ];

    const div = document.createElement('div');
    div.style.width = '100px';
    document.body.appendChild(div);
    let component = ReactDOM.render(<Breadcrumb routes={routes} />, div);
    let containerDiv = ReactDOM.findDOMNode(div);

    // Ellipsis, an arrow icon, and a breadcrumb
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(3);
    // All but the last breadcrumb
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(2);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');

    // Trigger a click on the ellipsis element
    eventFire(document.body.getElementsByClassName('ellipsis')[0], 'click');

    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.not.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('1');

    // Increase the width of the breadcrumbs container
    containerDiv.style.width = '600px';
    // Trigger window resize event
    eventFire(window, 'resize');

    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');
  });

  it('should not display minimized breadcrumbs when there\'s just one breadcrumb', () => {
    routes = [
      {
        path: 'first',
        title: 'First'
      }
    ];

    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = ReactDOM.render(<Breadcrumb routes={routes} />, div);
    const containerDiv = ReactDOM.findDOMNode(div);

    // Just one breadcrumb
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(1);
    // No hidden breadcrumbs
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(0);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');

    // Reduce the width of the breadcrumbs container
    containerDiv.style.width = '10px';
    // Trigger window resize event
    eventFire(window, 'resize');

    // Just one breadcrumb
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(1);
    // No hidden breadcrumbs
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(0);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');
  });

  it('should not react to window resize after componentWillUnmount method is called', () => {
    routes = [
      {
        path: 'first',
        title: 'First'
      },
      {
        path: 'second',
        title: 'Second'
      },
      {
        path: 'third',
        title: 'Third'
      }
    ];

    const div = document.createElement('div');
    document.body.appendChild(div);
    const component = ReactDOM.render(<Breadcrumb routes={routes} />, div);
    const containerDiv = ReactDOM.findDOMNode(div);

    // 3 breadcrumbs and 2 arrow icons
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(5);
    // All but the last breadcrumb
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(2);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');

    // Manually call the componentWillUnmount method
    component.componentWillUnmount();
    // Reduce the width of the breadcrumbs container
    containerDiv.style.width = '100px';
    // Trigger window resize event
    eventFire(window, 'resize');

    // 3 breadcrumbs and 2 arrow icons
    expect(document.body.getElementsByClassName('breadcrumb')[0].children).to.have.length(5);
    // All but the last breadcrumb
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].children).to.have.length(2);
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.height).to.equal('0px');
    expect(document.body.getElementsByClassName('breadcrumbs-dropdown')[0].style.opacity).to.equal('0');
  });
});
