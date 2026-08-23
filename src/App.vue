<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import CornerFrame from './components/CornerFrame.vue'
import IntroSection from './components/IntroSection.vue'

const scroller = ref(null)
const homeSection = ref(null)
const aboutSection = ref(null)
const activeSection = ref('home')

let sectionObserver
let wheelLocked = false
let wheelUnlockTimer
let desktopQuery
let reducedMotionQuery

const sectionElements = () => ({
  home: homeSection.value,
  about: aboutSection.value,
})

function scrollToSection(sectionName) {
  const target = sectionElements()[sectionName]
  if (!target) return

  target.scrollIntoView({
    behavior: reducedMotionQuery?.matches ? 'auto' : 'smooth',
    block: 'start',
  })
}

function handleWheel(event) {
  if (!desktopQuery?.matches || Math.abs(event.deltaY) < 8) return

  const target = event.deltaY > 0 ? 'about' : 'home'
  if (target === activeSection.value) return

  event.preventDefault()
  if (wheelLocked) return

  wheelLocked = true
  scrollToSection(target)
  window.clearTimeout(wheelUnlockTimer)
  wheelUnlockTimer = window.setTimeout(() => {
    wheelLocked = false
  }, reducedMotionQuery?.matches ? 80 : 700)
}

function handleKeydown(event) {
  const activeTag = document.activeElement?.tagName
  if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return

  const forwardKeys = ['ArrowDown', 'PageDown']
  const backwardKeys = ['ArrowUp', 'PageUp', 'Home']

  if (forwardKeys.includes(event.key) && activeSection.value === 'home') {
    event.preventDefault()
    scrollToSection('about')
  }

  if (backwardKeys.includes(event.key) && activeSection.value === 'about') {
    event.preventDefault()
    scrollToSection('home')
  }
}

onMounted(async () => {
  await nextTick()
  desktopQuery = window.matchMedia('(min-width: 768px)')
  reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleSection?.target?.dataset.section) {
        activeSection.value = visibleSection.target.dataset.section
      }
    },
    {
      root: scroller.value,
      threshold: [0.55, 0.75],
    },
  )

  sectionObserver.observe(homeSection.value)
  sectionObserver.observe(aboutSection.value)
  scroller.value.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
  scroller.value?.removeEventListener('wheel', handleWheel)
  window.removeEventListener('keydown', handleKeydown)
  window.clearTimeout(wheelUnlockTimer)
})
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#about" @click.prevent="scrollToSection('about')">
      Skip to introduction
    </a>

    <CornerFrame :active-section="activeSection" @navigate="scrollToSection" />

    <main ref="scroller" class="page-scroller" aria-label="Max's personal website">
      <section
        id="home"
        ref="homeSection"
        class="wallpaper-panel opening-panel"
        data-section="home"
        aria-label="Opening wallpaper"
      />

      <section
        id="about"
        ref="aboutSection"
        class="wallpaper-panel about-panel"
        data-section="about"
        aria-labelledby="about-title"
      >
        <IntroSection />
      </section>
    </main>
  </div>
</template>
