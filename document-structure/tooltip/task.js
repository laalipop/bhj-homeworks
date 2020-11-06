let tooltipArray = Array.from(document.querySelectorAll('.has-tooltip'));
let tooltipElement;

function showTooltip(event) {
    event.preventDefault();
    let target = event.target;
    tooltipElement = document.createElement('div');

    tooltipElement.classList.add('tooltip');
    tooltipElement.classList.toggle('tooltip_active');
    tooltipElement.innerHTML = target.title;
    tooltipElement.style.left = this.getBoundingClientRect().left + 'px';
    tooltipElement.style.top = this.getBoundingClientRect().top + 20 + 'px';
    this.append(tooltipElement);
}


tooltipArray.forEach(element => {
    element.addEventListener('click', showTooltip)
})

document.addEventListener('scroll', () => {
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
    }
})