(function() {
    const sidebar = document.querySelector('.sidebar');
    const logo = document.querySelector('.logo');
    let spans = document.querySelectorAll('.sidebar__link span');

    function toggleSidebar  () {
        if(this.dataset.open === 'false') {
            this.style.flexBasis = '20%';
            this.style.position = 'absolute'
            this.style.left = 0;
            this.style.top = 0;
            this.style.bottom = 0
            this.dataset.open = 'true';
            logo.classList.remove('hidden');
            spans.forEach(el => {
                el.classList.remove('hidden')
            })
        } else {
            this.style.flexBasis = '5%';
            this.dataset.open = 'false';
            this.style.position = 'static'
            logo.classList.add('hidden');
            spans.forEach(el => {
                el.classList.add('hidden')
            })
        }
    }
    sidebar.addEventListener('click', toggleSidebar )
})()