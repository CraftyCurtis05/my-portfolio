<!-- Base Modal Component -->
<template>
  <Teleport to="body">

    <div
      :id="modalId"
      class="modal fade"
      :class="modalClass"
      tabindex="-1"
      :aria-labelledby="labelId"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        :class="dialogClass"
      >

        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">

            <h2
              :id="labelId"
              class="modal-title"
            >
              <slot name="title"></slot>
            </h2>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              :aria-label="closeLabel"
            ></button>

          </div>


          <!-- Modal Body -->
          <div class="modal-body">

            <slot></slot>

          </div>

        </div>

      </div>
    </div>

  </Teleport>
</template>


<script>
export default {
  name: "BaseModal",

  props: {
    modalId: {
      type: String,
      required: true
    },

    labelId: {
      type: String,
      required: true
    },

    closeLabel: {
      type: String,
      default: "Close modal"
    },

    modalClass: {
      type: String,
      default: ""
    },

    dialogClass: {
      type: String,
      default: ""
    }
  }
};
</script>