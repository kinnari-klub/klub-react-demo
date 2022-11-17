/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ActiveRoundsCard from '../../../components/Mole/SumTitleValue/ActiveRoundsCard';


export default {
    title: 'Mole/SumTitleValue',
    component: ActiveRoundsCard,
};

const Template = (args) => <ActiveRoundsCard {...args} />;

export const ActiveRoundsCard1 = Template.bind({});
ActiveRoundsCard1.args = { cardAmountVal: '3', subTitle: 'Active Rounds' };
