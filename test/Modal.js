import React from 'react'
import { mount } from 'enzyme'
import Modal from '../src/components/Modal/Modal'

describe('Modal', () => {
  let wrapper;
  let modalOpen = false;

  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  function triggerEscKeyUp() {
    var e = new window.KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      shiftKey: true
    });

    delete e.keyCode;
    Object.defineProperty(e, 'keyCode', {'value': 27});

    document.dispatchEvent(e);
  }

  function toggleModal(status) {
    modalOpen = status;
    if (wrapper) {
      wrapper.setProps({open: status});
    }
  }

  afterEach(function() {
    var elems = document.body.children;
    document.body.removeChild(elems[elems.length -1]);
  });

  it('should render itself inside a div at the bottom of the document body', () => {
    wrapper = mount(<Modal title="Test title" open={modalOpen}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-component')).to.have.length(1);
    expect(document.body.getElementsByClassName('modal-content')).to.have.length(1);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('-100%');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0');
  });

  it('should be displayed when the open property is set to true', () => {
    wrapper = mount(<Modal title="Test title" open={modalOpen}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-component')).to.have.length(1);
    expect(document.body.getElementsByClassName('modal-content')).to.have.length(1);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('-100%');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0');

    toggleModal(true);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');
  });

  it('should close when the overlay is clicked', () => {
    modalOpen = true;
    wrapper = mount(<Modal title="Test title" open={modalOpen} onRequestClose={toggleModal.bind(this, false)}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');

    eventFire(document.body.getElementsByClassName('modal-component')[0].children[0], 'click');

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('-100%');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0');
  });

  it('should close when the close button is clicked', () => {
    modalOpen = true;
    wrapper = mount(<Modal title="Test title" open={modalOpen} onRequestClose={toggleModal.bind(this, false)}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');

    eventFire(document.body.getElementsByClassName('modal-close')[0].children[0], 'click');

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('-100%');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0');
  });

  it('should close when Esc is pressed', () => {
    modalOpen = true;
    wrapper = mount(<Modal title="Test title" open={modalOpen} onRequestClose={toggleModal.bind(this, false)}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');

    triggerEscKeyUp();

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('-100%');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0');
  });

  it('should not close when the overlay is clicked and closeOnAction property is set to true', () => {
    modalOpen = true;
    wrapper = mount(<Modal title="Test title" open={modalOpen} onRequestClose={toggleModal.bind(this, false)} closeOnAction={true}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');

    eventFire(document.body.getElementsByClassName('modal-component')[0].children[0], 'click');

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');
  });

  it('should not close when Esc is pressed and closeOnAction property is set to true', () => {
    modalOpen = true;
    wrapper = mount(<Modal title="Test title" open={modalOpen} onRequestClose={toggleModal.bind(this, false)} closeOnAction={true}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');

    triggerEscKeyUp();

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');
  });

  it('should be a small modal', () => {
    wrapper = mount(<Modal title="Test title" open={modalOpen} size="sm">Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-sm')).to.have.length(1);
  });

  it('should be a large modal', () => {
    wrapper = mount(<Modal title="Test title" open={modalOpen} size="lg">Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-lg')).to.have.length(1);
  });

  it('should have an extra class', () => {
    wrapper = mount(<Modal title="Test title" open={modalOpen} optClass="extra-class">Test modal content</Modal>);

    expect(document.body.getElementsByClassName('extra-class')).to.have.length(1);
  });

  it('should have actions in the footer', () => {
    const actions = [
      <button onClick={toggleModal.bind(this, false)}>Cancel</button>,
      <button onClick={toggleModal.bind(this, false)}>Submit</button>
    ];
    modalOpen = true;
    wrapper = mount(<Modal title="Test title" open={modalOpen} onRequestClose={toggleModal.bind(this, false)} actions={actions}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-actions')).to.have.length(1);
    expect(document.body.getElementsByClassName('modal-actions')[0].children).to.have.length(2);
  });

  it('should close when an action is clicked and closeOnAction property is set to true', () => {
    const actions = [
      <button onClick={toggleModal.bind(this, false)}>Cancel</button>,
      <button onClick={toggleModal.bind(this, false)}>Submit</button>
    ];
    modalOpen = true;
    wrapper = mount(<Modal title="Test title" open={modalOpen} onRequestClose={toggleModal.bind(this, false)} actions={actions}>Test modal content</Modal>);

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('0px');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0.6');

    eventFire(document.body.getElementsByClassName('modal-actions')[0].children[0], 'click');

    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.left).to.be.equal('-100%');
    expect(document.body.getElementsByClassName('modal-component')[0].children[0].style.opacity).to.be.equal('0');
  });
});
