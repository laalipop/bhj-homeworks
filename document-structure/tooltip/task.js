let tooltipArray = Array.from(document.querySelectorAll('.has-tooltip'));
let lastTooltip;
let currentTooltip;

function showTooltip(event) {   
    let tooltipElement = document.querySelector('.tooltip');
    let target = event.target;

    currentTooltip = target.textContent;
    if (currentTooltip == lastTooltip) {
        if (tooltipElement.classList.contains('tooltip_active')) {
            tooltipElement.classList.remove('tooltip_active');
        } else {
            tooltipElement.classList.add('tooltip_active');
        }
        
    } else {
        tooltipElement.classList.remove('tooltip_active');
        tooltipElement.classList.toggle('tooltip_active');
    }
    tooltipElement.innerText = target.title;
    tooltipElement.style.left = this.getBoundingClientRect().left + 'px';
    tooltipElement.style.top = this.getBoundingClientRect().top + 20 + 'px';
    target.after(tooltipElement);
    
    lastTooltip = target.textContent;

    event.preventDefault();
}


tooltipArray.forEach(element => {
    element.addEventListener('click', showTooltip)
})

document.addEventListener('scroll', () => {
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
    }
})