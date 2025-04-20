const elementsToOpen = document.querySelectorAll('.opening')
const openedElements = document.querySelectorAll('.drop-down-list')

elementsToOpen.forEach(el => {
	el.addEventListener('click', () => {
		elementsToOpen.forEach(item => {
			if (item !== el) {
				item.children[1].classList.remove('active')
				item.children[0].classList.remove('active')
				item.children[0].children[0].classList.remove('active')
			}
		})

		el.children[1].classList.toggle('active')
		el.children[0].classList.toggle('active')
		el.children[0].children[0].classList.toggle('active')
	})
})

window.addEventListener('click', (e) => {
	if(!e.target.closest('nav')) {
		elementsToOpen.forEach(item => {
			item.children[1].classList.remove('active')
			item.children[0].classList.remove('active')
			item.children[0].children[0].classList.remove('active')
		})
	}
})

const toggleBtn = document.querySelector('.toggle-menu-btn')
const mobileMenu = document.querySelector('.navigation-mobile')

toggleBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('active')
})