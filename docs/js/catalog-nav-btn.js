const catalogNavBtnAll = document.querySelectorAll('.catalog-nav-btn');
if (catalogNavBtnAll.length > 0) {
    for (let i = 0; i < catalogNavBtnAll.length; i++) {
        const catalogNavBtnItem = catalogNavBtnAll[i];
        catalogNavBtnItem.addEventListener('click', (e) => {
            e.target.classList.toggle('active');
            let catalogNavBtnItemWrap = e.target.closest('div');
            if (catalogNavBtnItemWrap.classList.contains('hidden')) {
                catalogNavBtnItemWrap.classList.remove('hidden');
                // catalogNavBtnItemWrap.classList.remove('anim-off');
                catalogNavBtnItemWrap.classList.add('anim-active')
            } else {
                catalogNavBtnItemWrap.classList.add('hidden');
                // catalogNavBtnItemWrap.classList.add('anim-off');
                catalogNavBtnItemWrap.classList.remove('anim-active')
            }
        })
    }
}