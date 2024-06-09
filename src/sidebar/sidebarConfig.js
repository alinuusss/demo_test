let sidebarLinks = [
    {
        name: 'Profile',
        url: 'profile',
        target: false,
        disabled: false,
        icon: '_icon_profile',
        isActive: (route) => route === 'profile',
        childrenLinks: []
    },
    {
        name: 'Vechicles',
        url: 'products',
        target: false,
        disabled: false,
        icon: '_icon_products',
        isActive: (route) => route === 'products',
        childrenLinks: []
    },
    {
        name: 'Setting',
        url: 'setting',
        target: false,
        disabled: false,
        isActive: (route) => route === 'products',
        icon: '_icon_setting',
        childrenLinks: []
    }
];

export default sidebarLinks;