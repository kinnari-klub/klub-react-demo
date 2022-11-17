/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import SumTitleValue from '../../../components/Mole/SumTitleValue/SumTitleValue';

export default {
    title: 'Mole/SumTitleValue',
    component: SumTitleValue,
};

const Template = (args) => <SumTitleValue {...args} />;

export const withUnit = Template.bind({});
withUnit.args = { subTitle: 'Raised', cardAmountVal: '956825123', subPercent: '', unit: '' };

export const withPercent = Template.bind({});
withPercent.args = { subTitle: 'Repaid', cardAmountVal: '3685180.22', subPercent: '12', unit: '' };