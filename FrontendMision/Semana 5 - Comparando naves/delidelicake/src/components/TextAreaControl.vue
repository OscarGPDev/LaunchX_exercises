<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  rows: {
    type: Number,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <textarea
      class="form-control"
      :id="id"
      :rows="rows"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>
