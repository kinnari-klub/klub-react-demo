/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import RoundInfo from '../../../components/Mole/Rounds/RoundInfo';


export default {
    title: 'Mole/Rounds/RoundInfo',
    component: RoundInfo,
};

const Template = (args) => <RoundInfo {...args} />;

export const Active = Template.bind({});
Active.args = { cardTitle: 'Round 1', cardSubTitle: 'Disbursed on', cardSubTitleDate: '12/10/2016', status: 'active' };

export const disable = Template.bind({});
disable.args = { cardTitle: 'Round 1', cardSubTitle: 'Disbursed on', cardSubTitleDate: '12/10/2025', status: 'disable' };