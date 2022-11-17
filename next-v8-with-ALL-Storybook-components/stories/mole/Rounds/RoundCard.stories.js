/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import RoundCard from '../../../components/Mole/Rounds/RoundCard';

export default {
    title: 'Mole/Rounds/RoundCard',
    component: RoundCard,
};

const Template = (args) => <RoundCard {...args} />;

export const RoundActive = Template.bind({});
RoundActive.args = { roundNo: '1', roundDate: '16/05/2016', roundRsTotal: '8240127', outStandingRs: '787689', rePaidRs: '143544', closedDate: '', status: 'active' };

export const RoundClosed = Template.bind({});
RoundClosed.args = { roundNo: '1', roundDate: '16/05/2016', roundRsTotal: '7526538', outStandingRs: '958758', rePaidRs: '143544', closedDate: '15/10/2023', status: 'closed' };