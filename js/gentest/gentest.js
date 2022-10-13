export function showSidenavbar(sel, open, close) {
    const sidebarContent = document.querySelector(sel),
        sidebar = document.querySelector(sel);
    const showOn = () => {
        sidebar.style.visibility = 'visible';
        sidebar.style.width = '100%';
        //sidebarContent.style.width = '100%';
        //sidebar.classList.remove('sidebar-off');
        //sidebar.classList.add('sidebar-on');
    };
    const showOff = () => {
        //sidebarContent.style.width = '0';
        sidebar.style.visibility = '';
        sidebar.style.width = '0';
        //sidebar.classList.add('sidebar-off');
        //sidebar.classList.remove('sidebar-on');
    }

    open.addEventListener('click', showOn);
    close.addEventListener('click', showOff);
}