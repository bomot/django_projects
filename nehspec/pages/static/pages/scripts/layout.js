const menuTags = document.querySelectorAll('[data-menu]');
const menuList = document.querySelector('.menu-list');

menuTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const newStatus = tag.dataset.menu === 'off' ? 'on' : 'off';
        menuTags.forEach(status => {
            status.dataset.menu = newStatus;
        });
        menuList.style.maxHeight = newStatus === 'on' ? menuList.scrollHeight + 'px' : '0px';
    });
});
