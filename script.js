const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.menu nav')

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const target = document.querySelector(this.getAttribute('href'))

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    })

    nav.classList.remove('active')
  })
})

if (window.location.hash) {
  window.scrollTo(0, 0)
}

const elementos = document.querySelectorAll('.animar')

function animarScroll() {
  const alturaTela = window.innerHeight

  elementos.forEach((el) => {
    const posicao = el.getBoundingClientRect().top

    if (posicao < alturaTela - 100) {
      el.classList.add('ativo')
    }
  })
}

window.addEventListener('scroll', animarScroll)

const textos = [
  "Hi, i'm Aurick Dutra!",
  "I'm a Software Engineering student.",
  'Welcome to my portfolio!',
]
let indexTexto = 0
let indexLetra = 0
let escrevendo = true

function escrever() {
  const elemento = document.getElementById('texto')

  if (escrevendo) {
    elemento.textContent = textos[indexTexto].substring(0, indexLetra + 1)
    indexLetra++

    if (indexLetra === textos[indexTexto].length) {
      escrevendo = false
      setTimeout(escrever, 1500)
      return
    }
  } else {
    elemento.textContent = textos[indexTexto].substring(0, indexLetra - 1)
    indexLetra--

    if (indexLetra === 0) {
      escrevendo = true
      indexTexto = (indexTexto + 1) % textos.length
    }
  }

  setTimeout(escrever, escrevendo ? 100 : 50)
}

escrever()
