<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label :for="id" class="form-label">{{ label }}</label>
  <input
    :type="type"
    class="form-control"
    :id="id"
    :placeholder="placeholder"
  />
</template>
