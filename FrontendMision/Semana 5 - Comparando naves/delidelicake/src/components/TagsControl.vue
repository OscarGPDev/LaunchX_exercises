<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  tagifyData: {
    type: Array,
    required: true,
  },
});
</script>
<script>
import "@yaireo/tagify/dist/tagify.css ";
import DragSort from "@yaireo/dragsort";
import Tagify from "@yaireo/tagify";
import "@yaireo/dragsort/dist/dragsort.css";

const renderSuggestionsList = (tagifyElement) => {
  tagifyElement.dropdown.show(); // load the list
  tagifyElement.DOM.scope.parentNode.appendChild(tagifyElement.DOM.dropdown);
};
const onSuggestionsListUpdate = ({ detail: suggestionsElm }) => {
  return suggestionsElm;
};

const onSuggestionsListHide = () => {
  console.log("hide dropdown");
};

const onDropdownScroll = (e) => {
  console.log(e.detail);
};
const dragSortTagify = (tagifyElement) => {
  new DragSort(tagifyElement.DOM.scope, {
    selector: "." + tagifyElement.settings.classNames.tag,
    callbacks: {
      dragEnd: () => {
        tagifyElement.updateValueByDOMTags();
      },
    },
  });
};
export default {
  data() {
    return {
      count: 1,
    };
  },

  // `mounted` is a lifecycle hook which we will explain later
  mounted() {
    const tagifyElement = new Tagify(document.getElementById(this.$props.id), {
      whitelist: this.$props.tagifyData,
      dropdown: {
        position: "manual",
        maxItems: Infinity,
        enabled: 0,
        classname: "customSuggestionsList",
      },
      enforceWhitelist: true,
    });
    dragSortTagify(tagifyElement);
    tagifyElement
      .on("dropdown:show", onSuggestionsListUpdate)
      .on("dropdown:hide", onSuggestionsListHide)
      .on("dropdown:scroll", onDropdownScroll);

    renderSuggestionsList(tagifyElement);
  },
};
</script>

<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      :placeholder="placeholder"
      class="form-control"
      name="tags-manual-suggestions"
      value=""
    />
  </div>
</template>
