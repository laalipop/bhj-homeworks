let tooltipArray = Array.from(document.querySelectorAll('.has-tooltip'));
let tooltipElement = document.querySelector('.tooltip');

function showTooltip(event) {
    event.preventDefault();
    let target = event.target;

    tooltipElement.classList.toggle('tooltip_active');
    tooltipElement.innerHTML = target.title;
    tooltipElement.style.left = this.getBoundingClientRect().left + 'px';
    tooltipElement.style.top = this.getBoundingClientRect().top + 20 + 'px';
    target.after(tooltipElement)
}


tooltipArray.forEach(element => {
    element.addEventListener('click', showTooltip)
})

document.addEventListener('scroll', () => {
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
    }
})