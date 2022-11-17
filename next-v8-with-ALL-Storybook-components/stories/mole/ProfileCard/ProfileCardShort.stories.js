/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ProfileCardShort from '../../../components/Mole/ProfileCard/ProfileCardShort';


export default {
    title: 'Mole/ProfileCard',
    component: ProfileCardShort,
};

const Template = (args) => <ProfileCardShort {...args} />;


export const ProfileCardShortMobile = Template.bind({});
ProfileCardShortMobile.args = { pcTitle: 'Smoor Chocolate', mobileImgPath: '/profile-card/user-mobile.svg' };