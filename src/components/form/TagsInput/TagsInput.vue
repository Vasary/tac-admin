<template>
  <div class="group">
    <label :for="id" v-if="label">{{ label }}</label>
    <div class="tags" :class="{'error': hasError}">
      <ul>
        <li class="tag" :class="{'delete': isMarked(index)}" v-for="(tag, index) in tagsCopy" :key="index">
          <div>{{ tag }}</div>
          <div class="remove" @click="remove(index)"/>
        </li>
        <li class="input">
          <input
              :id="id"
              :value="input"
              placeholder="Add a feature"
              @blur="addTag"
              @keyup.space="addTag"
              @keyup.delete="removeTag"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {createTags} from "~/components/form/TagsInput/helper";

export default {
  name: 'TagsInput',
  emits: ['tagsChanged', 'update:modelValue'],
  props: {
    id: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    modelValue: {
      required: true,
      type: Array,
    }
  },
  mounted() {
    this.tagsCopy = createTags(this.modelValue)
  },
  data() {
    return {
      tagsCopy: [],
      input: '',
      deletionMark: null,
      deletionMarkTime: null,
      hasError: false,
    }
  },
  watch: {
    modelValue() {
      this.init();
    },
    tagsCopy(values) {
      this.$emit('tagsChanged', values);
    }
  },
  methods: {
    remove(index) {
      this.tagsCopy.splice(index, 1);
    },
    init() {
      if (this.tagsCopy.length !== this.modelValue.length) {
        this.tagsCopy = createTags(this.modelValue)
      }
    },
    isMarked(index) {
      return this.deletionMark === index;
    },
    markError() {
      if (!this.hasError) {
        this.hasError = true;
        setTimeout(() => this.hasError = false, 1000);
      }
    },
    removeTag() {
      if (this.input.length !== 0) {
        return;
      }

      if (this.deletionMark === null) {
        this.deletionMark = this.tagsCopy.length - 1;
        this.deletionMarkTime = setTimeout(() => this.deletionMark = null, 1000);
      } else {
        this.deletionMark = null;
        clearTimeout(this.deletionMarkTime);
        this.tagsCopy.splice(this.tagsCopy.length - 1, 1);
      }
    },
    isTagDuplicate(newTag) {
      let duplications = this.tagsCopy.filter(element => {
        return element === newTag;
      });

      return duplications.length > 0;
    },
    addTag(event) {
      const tagValue = event.target.value.replace(/\s/g, '');

      if (tagValue.length === 0) {
        return;
      }

      if (!/^([a-z0-9]+)$/.test(tagValue) || this.isTagDuplicate(tagValue)) {
        this.markError();

        return;
      }

      this.tagsCopy.push(tagValue);
      this.input = '';
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";
@import "src/assets/scss/_icons.scss";

.group {
  border-radius: 6px;

  label {
    color: $text-color;
  }

  .tags {
    margin-top: 4px;
    border: 1px solid $border-color;
    border-radius: 6px;

    &.error {
      border-color: $error;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    line-height: 1em;

    li {
      &.input {
        input {
          padding: 8px 4px;
          width: 100%;
          border: none;
          outline: none;
          border-radius: 6px;
        }
      }

      &.delete {
        background-color: $error !important;
        color: $white !important;

        .remove {
          background-image: get-icon('cross', $white);
        }
      }

      &.tag {
        border-radius: 2px;
        display: flex;
        background-color: $secondary;
        color: $text-color;
        padding: 5px 8px;
        margin: 2px;
        font-size: 12px;
        flex-wrap: nowrap;
        flex-direction: row;
        align-items: center;
      }

      .remove {
        cursor: pointer;
        margin-left: 8px;
        width: 14px;
        height: 14px;
        background-size: cover;
        background-image: get-icon('cross', $error);
      }
    }
  }
}
</style>
