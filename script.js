
const dropdownList = document.querySelectorAll('label[data-purpose="dropdown"]')

dropdownList.forEach((element) => {
  const checkbox = element.querySelector('input[type="checkbox"]');
  const dropdownArrow = element.querySelector('img');

  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.addEventListener('click', closeDropdownOutside);
    } else {
      document.removeEventListener('click', closeDropdownOutside);
    }
  });

  dropdownArrow.addEventListener('click', (e) => {
    e.stopPropagation()
  });

  const closeDropdownOutside = (e) => {
    if (!element.contains(e.target)) {
      checkbox.checked = false;
      document.removeEventListener('click', closeDropdownOutside);
    }
  };
})



const themeSwitcher = document.getElementById('theme-switcher')

const toggleTheme = (isDark) => {
  if(isDark){
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  else document.documentElement.setAttribute('data-theme', 'light')
}

themeSwitcher.addEventListener('change',(e) => {
  const isDarkTheme = e.target.checked
  toggleTheme(isDarkTheme)
})


const slider = document.getElementById('slider')

const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

const scrollLength = 637
const steps = slider.children.length
let currentPosition = 1

const toggleSlider = (direction) => {
  const isLast = currentPosition === steps
  if(direction === 'right'){
    if(isLast) {
      slider.scrollTo({left:0})
      currentPosition = 1
    }
    else slider.scrollTo({left: currentPosition++ * scrollLength})
  }
  else {
    if(currentPosition === 1) {
      slider.scrollTo({left: (steps-1)*scrollLength})
      currentPosition = steps
    }
    else {
      slider.scrollTo({left: --currentPosition*scrollLength - scrollLength})
    }
  }
}

nextButton.addEventListener('click', () => toggleSlider('right'))
prevButton.addEventListener('click', () => toggleSlider('left'))


const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const name =  e.target.elements[0].value
  const phone = e.target.elements[1].value
  const email = e.target.elements[2].value
  const checkmark = e.target.elements[3].checked

  alert(`Name: ${name}, Phone: ${phone}, Email: ${email}, Checkmark: ${checkmark}`)
})