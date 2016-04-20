import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ProgressBar from '../src/components/ProgressBar/ProgressBar';

// describe("ProgressBar", function() {
//   it("shallow rendered component should contain div", function() {
//     expect(shallow(<First test='test' />).contains(<div className='foo'>Foo</div>)).to.be.true;
//   });
// });

describe('ProgressBar', () => {
  it('should shallow render itself with proper tags, have default className and appropriate progress bar style', () => {
    let processed_actions=10;
    let total_actions=100;
    const label = 'Commission export';
    const wrapper = shallow(<ProgressBar value={processed_actions} denominator={total_actions} label={label}/>);

    // let outerDiv = result.props.children[1];
    // let innerDiv = outerDiv.props.children;

    expect(wrapper.find('div')).to.have.length(3);
    // expect(result.type).to.equal('div');
    // expect(result.props.className).toBe('ga-progress-bar-container ga-progress-bar-sm ga-progress-bar-success');
    // expect(outerDiv.type).toBe('div');
    // expect(outerDiv.props.className).toBe('ga-progress-bar-outer');
    // expect(innerDiv.type).toBe('div');
    // expect(innerDiv.props.className).toBe('ga-progress-bar-inner');
    // expect(innerDiv.props.style.left).toBe('-90%');

    // processed_actions=100;
    // total_actions=100;
    // renderer.render(<ProgressBar value={processed_actions} denominator={total_actions} label={label}/>);
    // result = renderer.getRenderOutput();
    // outerDiv = result.props.children[1];
    // innerDiv = outerDiv.props.children;
    // expect(innerDiv.props.style.left).toBe('0%');
  });

  // it('should have className according to props passed in', () => {
  //   const processed_actions = 10;
  //   const total_actions = 100;
  //   const label = 'Commission export';
  //   const size = 'lg';
  //   const color = 'info';
  //   const renderer = TestUtils.createRenderer();
  //   renderer.render(<ProgressBar value={processed_actions} denominator={total_actions} label={label} size={size} color={color} /> );
  //   const result = renderer.getRenderOutput();

  //   expect(result.type).toBe('div');
  //   expect(result.props.className).toBe('ga-progress-bar-container ga-progress-bar-lg ga-progress-bar-info');
  // });

  // it('should display ProgressBarLabel component', () => {
  //   const processed_actions = 10;
  //   const total_actions = 100;
  //   const label = 'Commission export';
  //   const renderer = TestUtils.createRenderer();
  //   renderer.render(<ProgressBar value={processed_actions} denominator={total_actions} label={label} /> );
  //   const result = renderer.getRenderOutput();
  //   const progressBar = result.props.children[0];

  //   expect(result.type).toBe('div');
  //   expect(progressBar.type).toBe(ProgressBarLabel);
  // });

  // it('should not display ProgressBarLabel component', () => {
  //   const processed_actions = 10;
  //   const total_actions = 100;
  //   const renderer = TestUtils.createRenderer();
  //   renderer.render(<ProgressBar value={processed_actions} denominator={total_actions} /> );
  //   const result = renderer.getRenderOutput();

  //   expect(result.type).toBe('div');
  //   expect(result.props.children[0]).toBeNull();
  // });
});

// describe('ProgressBarLabel', () => {
//   it('should shallow render itself with proper tags and show percentage', () => {
//     const text = 'Ambassador export';
//     const percentage = 44;
//     const showPercentage = true;
//     const renderer = TestUtils.createRenderer();
//     renderer.render(<ProgressBarLabel text={text} showPercentage={showPercentage} percentage={percentage} />);
//     const result = renderer.getRenderOutput();

//     expect(result.type).toBe('label');
//     expect(result.props.children.length).toBe(3);
//     expect(result.props.children[0]).toBe(text);
//     expect(result.props.children[2].type).toBe('span');
//     expect(result.props.children[2].props.className).toBe('ga-progress-bar-percentage');
//     expect(result.props.children[2].props.children.join('')).toBe('(44%)');
//   });

//   it('should shallow render itself with proper tags and don\'t show percentage', () => {
//     const text = 'Ambassador export';
//     const percentage = 44;
//     const showPercentage = false;
//     const renderer = TestUtils.createRenderer();
//     renderer.render(<ProgressBarLabel text={text} showPercentage={showPercentage} percentage={percentage}/>);
//     const result = renderer.getRenderOutput();

//     expect(result.type).toBe('label');
//     expect(result.props.children.length).toBe(3);
//     expect(result.props.children[0]).toBe(text);
//     expect(result.props.children[2]).toBeNull();
//   });
// });