/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import SumPieChart from '../../../components/Orgnisams/SumPieChart';

export default {
    title: 'Orgnisams/SumSection/SumPieChart',
    component: SumPieChart,
};

const Template = (args) => <SumPieChart {...args} />;

export const SumPieChart1 = Template.bind({});
SumPieChart1.args = {
    raised: '126022589', repaid: '202,180.22', repaidPercent: '12', outstanding: '3600180.22', outstandingPercent: '88'
};