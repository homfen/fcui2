/**
 * @file Specs for Calendar
 * @author Brian Li (lbxxlht@163.com)
 * @date  07/03/2016
 */

define(function (require) {


    const _ = require('underscore');
    const React = require('react');
    const ReactDOM = require('react-dom');
    const TestUtils = React.addons.TestUtils;
    const Calendar = require('Calendar.jsx');


    function realRender(Component, props) {
        return TestUtils.renderIntoDocument(<Component {...props} />);
    }

    describe('Calendar', () => {

        describe('Base Testing', () => {

            it('Normal Calendar', () => {
                let dom = realRender(Calendar, {
                    value: '1999-01-31'
                });
                expect(dom.refs.inputYear.props.value + '').toBe('1999');
            });

            it('Incorrect value', () => {
                let dom = realRender(Calendar, {
                    value: 'abcdefg'
                });
                expect(dom.refs.inputYear.props.value + '').toBe((new Date()).getFullYear() + '');
            });

            it('Events', () => {
                let value = '';
                let dom = realRender(Calendar, {
                    value: '1999-01-31',
                    onChange(e) {
                        value = e.target.value;
                    }
                });
                expect(dom.refs.inputYear.props.value + '').toBe('1999');
                TestUtils.Simulate.click(dom.refs.inputYear.refs.container.childNodes[2].childNodes[0]);
                expect(dom.refs.inputYear.props.value + '').toBe('2000');
                TestUtils.Simulate.click(dom.refs.inputMonth.refs.container.childNodes[2].childNodes[0]);
                expect(dom.refs.inputMonth.props.value + '').toBe('2');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[0]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[0]);
                expect(dom.refs.inputMonth.props.value + '').toBe('12');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[3]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[3]);
                expect(dom.refs.inputMonth.props.value + '').toBe('2');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[3]);
                expect(dom.refs.inputMonth.props.value + '').toBe('3');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[3]);
                expect(dom.refs.inputMonth.props.value + '').toBe('4');
                TestUtils.Simulate.click(dom.refs.container.childNodes[2].childNodes[10]);
                expect(value).toBe('2000-04-06');
            });

            it('Disabled', () => {
                let value = '';
                let dom = realRender(Calendar, {
                    value: '1999-01-31',
                    disabled: true,
                    onChange(e) {
                        value = e.target.value;
                    }
                });
                expect(dom.refs.inputYear.props.value + '').toBe('1999');
                TestUtils.Simulate.click(dom.refs.inputYear.refs.container.childNodes[2].childNodes[0]);
                expect(dom.refs.inputYear.props.value + '').toBe('1999');
                TestUtils.Simulate.click(dom.refs.inputMonth.refs.container.childNodes[2].childNodes[0]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[0]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[0]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[3]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[3]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[3]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[0].childNodes[3]);
                expect(dom.refs.inputMonth.props.value + '').toBe('1');
                TestUtils.Simulate.click(dom.refs.container.childNodes[2].childNodes[10]);
                expect(value).toBe('');
            });


        });

    });
});