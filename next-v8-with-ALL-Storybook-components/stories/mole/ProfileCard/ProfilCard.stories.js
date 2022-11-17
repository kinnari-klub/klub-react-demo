/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ProfileCard from '../../../components/Mole/ProfileCard/ProfileCard';


export default {
    title: 'Mole/ProfileCard',
    component: ProfileCard,
};

const Template = (args) => <ProfileCard {...args} />;


export const ProfileCardFullDesktop = Template.bind({});
ProfileCardFullDesktop.args = { pcTitle: 'Smoor Chocolate', pcSubTitle: 'Amit Trivedi' };