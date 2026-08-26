<!-- System Diagnostic Component -->
<template>
  <Transition name="diagnostic">

    <aside
      v-if="isVisible"
      ref="diagnosticPanel"
      class="diagnostic-panel"
      role="dialog"
      aria-modal="false"
      aria-labelledby="diagnosticTitle"
      tabindex="-1"
      @keydown="handleKeydown"
    >

      <!-- Diagnostic Header -->
      <div class="diagnostic-header">

        <p id="diagnosticTitle">
          Jennifer OS // System Diagnostic
        </p>

        <button
          ref="diagnosticClose"
          type="button"
          class="diagnostic-close"
          aria-label="Close system diagnostic"
          @click="$emit('close')"
        >
          ×
        </button>

      </div>


      <!-- Diagnostic Results -->
      <div class="diagnostic-results">

        <p>
          <span>
            Problem-solving engine
          </span>

          <strong>
            ONLINE
          </strong>
        </p>

        <p>
          <span>
            Pattern recognition
          </span>

          <strong>
            SLIGHTLY EXCESSIVE
          </strong>
        </p>

        <p>
          <span>
            Coffee reserves
          </span>

          <strong>
            MONITOR CLOSELY
          </strong>
        </p>

        <p>
          <span>
            Playlist dependency
          </span>

          <strong>
            OPERATIONAL
          </strong>
        </p>

        <p>
          <span>
            "Could this work better?"
          </span>

          <strong>
            ALWAYS RUNNING
          </strong>
        </p>

      </div>


      <!-- System Status -->
      <p class="diagnostic-status">
        STATUS:
        <span>
          Ready to improve something.
        </span>
      </p>


      <!-- Debugging Playlist -->
      <a
        href="https://open.spotify.com/playlist/4aKarMXBE8e5CWYzVMuPJu?si=9df4db2599474a8d"
        target="_blank"
        rel="noopener noreferrer"
        class="diagnostic-playlist"
        title="Open my coding playlist on Spotify"
      >
        <span class="playlist-command">
          &gt; initiate focus protocol
        </span>

        <span class="playlist-description">
          Jennifer OS // Focus Protocol
        </span>
      </a>


      <!-- Diagnostic Note -->
      <p class="diagnostic-note">
        No systems were overengineered during this diagnostic.
      </p>

    </aside>

  </Transition>
</template>


<script>
export default {
  name: "SystemDiagnostic",

  emits: [
    "close"
  ],

  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },

  methods: {

    /* Handle Diagnostic Keyboard Navigation */
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.$emit(
          'close'
        );

        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const panelElement =
        this.$refs.diagnosticPanel;

      if (!panelElement) {
        return;
      }

      const focusableElements =
        panelElement.querySelectorAll(
          [
            'a[href]',
            'button:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
          ].join(',')
        );

      const focusable =
        Array.from(
          focusableElements
        ).filter(
          (element) =>
            element.offsetParent !== null
        );

      if (focusable.length === 0) {
        event.preventDefault();

        panelElement.focus();

        return;
      }

      const firstElement =
        focusable[0];

      const lastElement =
        focusable[
          focusable.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          firstElement
      ) {
        event.preventDefault();

        lastElement.focus();

        return;
      }

      if (
        !event.shiftKey &&
        document.activeElement ===
          lastElement
      ) {
        event.preventDefault();

        firstElement.focus();
      }
    }
  },

  watch: {

    /* Focus Diagnostic When Opened */
    isVisible(isVisible) {
      if (!isVisible) {
        return;
      }

      this.$nextTick(() => {
        this.$refs.diagnosticClose?.focus();
      });
    }
  }
};
</script>


<style scoped>
/* ========================================
   Diagnostic Panel
======================================== */

.diagnostic-panel {
  position: fixed;

  left: 50%;
  bottom: 1.5rem;

  width:
    min(calc(100% - 3rem), 28rem);

  padding: 1.25rem;

  color:
    var(--color-text);

  background-color:
    var(--color-surface-transparent-strong);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: 1rem;

  box-shadow:
    0 .75rem 1.5rem
    var(--color-shadow-strong);

  backdrop-filter:
    blur(.75rem);

  transform:
    translateX(-50%);

  z-index: 1080;
}


/* ========================================
   Diagnostic Header
======================================== */

.diagnostic-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  margin-bottom: 1rem;
  padding-bottom: .75rem;

  border-bottom:
    1px solid
    var(--color-border-transparent);
}

.diagnostic-header p {
  margin: 0;

  color:
    var(--color-accent-muted);

  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.diagnostic-close {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  padding: 0;

  color:
    var(--color-text);

  background-color: transparent;

  border: 0;
  border-radius: 50%;

  font-size: 1.5rem;
  line-height: 1;

  cursor: pointer;

  transition:
    background-color .2s ease,
    transform .2s ease;
}

.diagnostic-close:hover,
.diagnostic-close:focus-visible {
  background-color:
    var(--color-surface-transparent);
}

.diagnostic-close:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 3px;
}


/* ========================================
   Diagnostic Results
======================================== */

.diagnostic-results {
  display: grid;

  gap: .65rem;
}

.diagnostic-results p {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  gap: 1rem;

  margin: 0;

  color:
    var(--color-text-body);

  font-size: .9rem;
}

.diagnostic-results strong {
  color:
    var(--color-text);

  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .04em;

  text-align: right;
}


/* ========================================
   System Status
======================================== */

.diagnostic-status {
  margin:
    1rem
    0
    0;

  padding-top: .75rem;

  color:
    var(--color-accent-muted);

  border-top:
    1px solid
    var(--color-border-transparent);

  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .05em;
}

.diagnostic-status span {
  color:
    var(--color-text);

  font-weight: 500;
}


/* ========================================
   Debugging Playlist
======================================== */

.diagnostic-playlist {
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  margin-top: .85rem;

  padding:
    .65rem
    .75rem;

  color:
    var(--color-text);

  background-color:
    var(--color-surface-transparent);

  border:
    1px solid
    var(--color-border-transparent);

  border-radius: .5rem;

  text-decoration: none;

  transition:
    border-color .2s ease,
    background-color .2s ease,
    transform .2s ease;
}

.diagnostic-playlist:hover {
  background-color:
    var(--color-surface-transparent-strong);

  border-color:
    var(--color-accent-muted);

  transform:
    translateY(-1px);
}

.diagnostic-playlist:focus-visible {
  outline:
    2px solid
    var(--color-accent-blue);

  outline-offset: 3px;
}

.playlist-command {
  color:
    var(--color-accent-muted);

  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .03em;
}

.playlist-description {
  color:
    var(--color-text-muted);

  font-size: .75rem;

  white-space: nowrap;
}


/* ========================================
   Diagnostic Note
======================================== */

.diagnostic-note {
  margin:
    .6rem
    0
    0;

  color:
    var(--color-text-muted);

  font-size: .75rem;
  font-style: italic;

  text-align: center;
}


/* ========================================
   Touch Interaction
======================================== */

@media (hover: none) and
       (pointer: coarse) {

  .diagnostic-close:active {
    background-color:
      var(--color-surface-transparent);

    transform:
      scale(.9);
  }

  .diagnostic-playlist:active {
    background-color:
      var(--color-surface-transparent-strong);

    border-color:
      var(--color-accent-muted);

    transform:
      translateY(1px)
      scale(.99);
  }
}


/* ========================================
   Diagnostic Transition
======================================== */

.diagnostic-enter-active,
.diagnostic-leave-active {
  transition:
    opacity .25s ease,
    transform .25s ease;
}

.diagnostic-enter-from,
.diagnostic-leave-to {
  opacity: 0;

  transform:
    translateX(-50%)
    translateY(.75rem);
}


/* ========================================
   Mobile
======================================== */

@media (max-width: 600px) {
  .diagnostic-panel {
    left: 50%;
    bottom: 1rem;

    width:
      calc(100% - 2rem);

    padding: 1rem;

    transform:
      translateX(-50%);
  }

  .diagnostic-results p {
    font-size: .8rem;
  }

  .diagnostic-results strong {
    font-size: .7rem;
  }
}


/* ========================================
   Small Mobile
======================================== */

@media (max-width: 400px) {
  .diagnostic-results p {
    flex-direction: column;

    gap: .15rem;
  }

  .diagnostic-results strong {
    text-align: left;
  }

  .diagnostic-playlist {
    flex-direction: column;
    align-items: flex-start;

    gap: .2rem;
  }
}


/* ========================================
   Reduced Motion
======================================== */

@media (prefers-reduced-motion: reduce) {
  .diagnostic-enter-active,
  .diagnostic-leave-active,
  .diagnostic-close,
  .diagnostic-playlist {
    transition: none;
  }
}
</style>