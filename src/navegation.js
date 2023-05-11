export function scrollToSection(elements, logo) {
    if(elements){

        elements.forEach((link)=> {
            link.addEventListener('click',(e)=> {
            e.preventDefault();
            const currentId = e.target.attributes.href.value;
            const section = document.querySelector(currentId);
            const sectionPos = section.offsetTop;

            section.scrollIntoView({
                behavior:'smooth',
                block: 'center',
                inline: 'center',
                offsetTop: sectionPos
            });
            console.log(e);
        });
    });
}
logo.addEventListener('click', (e)=> { 
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior:'smooth',
        });
    });
}