const elementsToOpen = document.querySelectorAll('.opening')
const openedElements = document.querySelectorAll('.drop-down-list')
const mobileMenu = document.querySelector('.navigation-mobile')

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

const arr = [1,2,3,4,4]

const bgImages = document.querySelectorAll('.bg-img')

function bgImgChange() {
	let imgCounter = 1

	setInterval(() => {
		bgImages.forEach(img => {
			img.classList.remove('active')
		})

		if(imgCounter === bgImages.length - 1) imgCounter = 0

		bgImages[imgCounter].classList.add('active')
		imgCounter++
	}, 10000);
}

bgImgChange()


const toggleBtn = document.querySelector('.toggle-menu-btn')

toggleBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('active')
})