/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import NavbarLight from '../../../components/Orgnisams/NavbarLight';

export default {
    title: 'Orgnisams/Navbar/light',
    component: NavbarLight,
};

const Template = (args) => <NavbarLight {...args} />;

export const NavbarLight1 = Template.bind({});
NavbarLight1.args = { logoImgSrc: '/logo/logo-black.svg', logoColor: 'dark', pcTitle: 'Smoor Chocolate', pcSubTitle: 'Amit Trivedi', userImgPath: '/profile-card/user-img.svg' };