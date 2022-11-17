/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import SumSecHome from '../../../components/Orgnisams/SumSecHome';


export default {
    title: 'Orgnisams/SumSection',
    component: SumSecHome,
};

const Template = (args) => <SumSecHome {...args} />;

export const SummurySectionFull = Template.bind({});
SummurySectionFull.args = { raised: '126026547', repaid: '202180.22', repaidPercent: '12', outstanding: '3600180.22', outstandingPercent: '88', actRoundNo: '5' };