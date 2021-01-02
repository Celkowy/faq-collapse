const icons = document.querySelectorAll('.icon')
const faqs = document.querySelectorAll('.faq')

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('active')

    icon.parentNode.parentNode.children[1].children[0].classList.toggle('active')
    icon.parentNode.parentNode.classList.toggle('active')
  })
})
