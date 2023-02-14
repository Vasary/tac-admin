<template>
  <div class="content-wrapper">
    <h2 v-if="title">{{ title }}</h2>
    <div class="navigation-button--create-new" v-if="isRemovable() || isCreatable()">
      <div v-if="isRemovable()">
        <Button
            icon="cross"
            color="warning"
            type="button"
            @click="removeSelected"
        >
          Delete
        </Button>
      </div>
      <div v-if="isCreatable()">
        <Link
            direction="right"
            icon="arrow"
            color="primary"
            type="link"
            :route="createRoute"
        >Create
        </Link>
      </div>
    </div>
    <div class="data-table-wrapper">
      <data-table
          v-model:server-options="serverOptions"
          v-model:items-selected="selectedItems"
          :server-items-length="serverItemsLength"
          :headers="headers"
          :items="items"
          :loading="false"
          table-class-name="customize-table"
          alternating
          buttons-pagination
      >
        <template #item-createdAt="{ createdAt }">
          {{ date(createdAt) }}
        </template>
        <template #item-updatedAt="{ updatedAt }">
          {{ date(updatedAt) }}
        </template>
        <template #item-id="{ id }" v-if="isEditable()">
          <router-link :to="{ name: editRoute, params: { id: id } }">
            <Icon color="secondary" icon="edit"/>
          </router-link>
        </template>
      </data-table>
    </div>
  </div>
</template>

<style scoped>
.customize-table {
  --easy-table-border: 0;
}

.content-wrapper {
  padding: 20px 0 20px 0;
}

.navigation-button--create-new {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
}

.navigation-button--create-new > div {
  margin-right: 20px;
}

.data-table-wrapper {
  margin-top: 20px;
}

h2 {
  text-align: center;
  padding: 20px;
}
</style>

<script>
import Button from "~/components/form/BaseButton";
import Link from "~/components/form/LinkButton";
import Icon from "~/components/form/BaseIcon";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import {ref} from "vue";
import {toastRemoved} from "~/helper/toast";

export default {
  name: 'TableComponent',
  props: {
    title: {
      required: false,
      type: String,
    },
    editRoute: {
      required: false,
      type: String,
    },
    createRoute: {
      required: false,
      type: String,
    },
    headers: {
      required: true,
      type: Array,
    },
    loader: {
      required: true,
      type: Function,
    },
    remover: {
      required: false,
      type: Function,
    },
    dataExtractor: {
      required: false,
      type: Function,
    }
  },
  components: {
    Button,
    Link,
    Icon,
    dataTable: Vue3EasyDataTable,
  },
  watch: {
    serverOptions() {
      this.load();
    }
  },
  data() {
    return {
      selectedItems: []
    }
  },
  methods: {
    isEditable() {
      return undefined !== this.editRoute
    },
    isRemovable() {
      return undefined !== this.remover;
    },
    isCreatable() {
      return undefined !== this.createRoute;
    },
    date(value) {
      const date = new Date(value.replace('T', ' ').split('+')[0]);

      return date.toLocaleDateString('en-DE') + ' ' + date.toLocaleTimeString('en-DE');
    },
    load() {
      this.loader(this.serverOptions.page, this.serverOptions.rowsPerPage).then(
          response => {
            if (undefined === this.dataExtractor) {
              this.items = response.items ?? [];
            } else {
              this.items = this.dataExtractor(response);
            }

            this.serverItemsLength = response.total ?? 0;
          }
      );
    },
    remove(id) {
      return this.remover(id)
    },
    async removeSelected() {
      let promises = [];
      this.selectedItems.forEach(item => promises.push(this.remove(item.id)));

      Promise.all(promises)
          .then(() => this.$store.commit('toast/add', toastRemoved()))
          .then(() => this.load(this.serverOptions.page, this.serverOptions.rowsPerPage))
    },
  },
  mounted() {
    this.load();
  },
  setup() {
    const items = ref([]);
    const serverItemsLength = ref(0);
    const serverOptions = ref({
      page: 1,
      rowsPerPage: 50,
    });

    return {
      items,
      serverOptions,
      serverItemsLength,
    };
  },
}
</script>
