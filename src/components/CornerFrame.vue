<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

defineProps({
  activeSection: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['navigate'])

const socialLinks = [
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/yong-suk-heo/',
    icon: faLinkedin,
  },
  {
    label: 'github',
    href: 'https://github.com/missiletoe',
    icon: faGithub,
  },
]

function socialLabel(label) {
  return `Open Max's ${label} profile in a new tab`
}
</script>

<template>
  <div class="corner-frame" aria-label="Primary site frame">
    <h1 class="brand-mark">Max, the Developer</h1>

    <nav class="social-links" aria-label="Social links">
      <a
        v-for="link in socialLinks"
        :key="link.label"
        class="link link-hover social-link"
        :href="link.href"
        target="_blank"
        rel="noreferrer noopener"
        :aria-label="socialLabel(link.label)"
      >
        <FontAwesomeIcon class="social-icon" :icon="link.icon" aria-hidden="true" />
        <span class="social-label">{{ link.label }}</span>
      </a>
    </nav>

    <div
      class="btn btn-ghost btn-circle appearance-status"
      role="img"
      aria-label="System appearance"
      title="System appearance"
    >
      <FontAwesomeIcon class="appearance-icon" :icon="faCircleHalfStroke" aria-hidden="true" />
    </div>

    <button
      v-if="activeSection === 'home'"
      type="button"
      class="btn btn-ghost scroll-control"
      aria-label="Scroll to the introduction"
      @click="emit('navigate', 'about')"
    >
      scroll to meet me <span aria-hidden="true">↓</span>
    </button>
    <button
      v-else
      type="button"
      class="btn btn-ghost scroll-control"
      aria-label="Back to top"
      @click="emit('navigate', 'home')"
    >
      back to top <span aria-hidden="true">↑</span>
    </button>
  </div>
</template>
