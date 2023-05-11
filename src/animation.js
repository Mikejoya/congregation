const isIntersecting = (entries)=> {
    return entries.isIntersecting;
}

function accion(entry) {
    console.log(entry.target);
    const container = entry.target;
    const image = container.querySelector('img');
    let url; 
    if(image) {
        console.log(url);
        url = image.dataset.url;
        image.src = url;
        console.log(url);
    }
    container.style.transform = 'scale(1) translateX(0)'
    const button = container.querySelector('button');
    if(button) {
        button.classList.remove('inactive');
    }
    console.log(url);

    observer.unobserve(entry.target);
}

const observer = new IntersectionObserver((entries)=> {
    entries.filter(isIntersecting).forEach(accion)
});

export function executionObserver(container) {
    observer.observe(container);
}