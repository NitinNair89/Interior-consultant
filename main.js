const drawerMenu = document.getElementById('drawer__menu');
document.getElementById('drawer__menu--show').addEventListener('click', function () {
    drawerMenu.classList.add('show'); 
});
document.getElementById('drawer__menu--close').addEventListener('click', function () {
    drawerMenu.classList.remove('show'); 
});