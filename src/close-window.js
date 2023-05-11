export function closeWindow(container, button, options, nav) {
    button.addEventListener('click', ()=> {
        if (options && container) {
            container.classList.remove('inactive');
            options.style.display = 'none';
            nav.classList.add('inactive');
        }else {
            container.classList.toggle('inactive');
        }
    });
}  

export function closeContainer(button, container, options, nav) {
    button.addEventListener('click', ()=> {
        container.classList.add('inactive');
        options.style.display = 'block';
        nav.classList.remove('inactive');
    });
}

export function back(button) {
    button.addEventListener('click', ()=> {
            window.history.back();
        });
}