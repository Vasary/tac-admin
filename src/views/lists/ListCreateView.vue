<template>
  <div class="container">

    <div class="title">
      <h2>New list</h2>
    </div>
    <row :gutter="12">
      <column :xs="6">
        <BaseInput
            id="listName"
            label="List name"
            :value="listName"
            @input="listName = $event.target.value"
        />
      </column>
      <column :xs="6">
        <BaseMultiSelectSearch
            id="users"
            mode="single"
            label="Owner"
            :fetcher="usersLoader"
            :min-chars=3
            :value="owner"
            @change-value="owner = $event"
        />
      </column>
    </row>

    <row :gutter="12">
      <column :xs="6">
        <BaseMultiSelectSearch
            id="users"
            mode="multiple"
            :fetcher="usersLoader"
            :value="users"
            :min-chars=3
            label="Members"
            @change-value="users = $event"
        />
      </column>


      <column :xs="6">
        <div class="users-container">
          <ul class="users-list">
            <li class="user" v-for="(user, index) in users" :key="index">
              <UserTag :name="user"/>
            </li>
          </ul>
        </div>
      </column>
    </row>

    <div class="products-header">
      <h2>Products</h2>
    </div>

    <div class="add-button-wrapper">
      <BaseButton
          direction="right"
          icon="plus"
          type="button"
          color="primary"
          @click="addProduct"
      >Add product
      </BaseButton>
    </div>

    <div class="items-list">
      <div class="items" v-for="(item, index) in items" :key="item.name">
        <row container :gutter="12">
          <column :xs="6">
            <BaseMultiSelectSearch
                label="Product"
                mode="single"
                :id="getInputId('product', index)"
                :fetcher="productsLoader"
                :min-chars=0
                :value="item.product"
                @change-value="item.product = $event"
            />
          </column>
          <column :xs="2">
            <BaseInput
                label="Count"
                :id="getInputId('count', index)"
                :value="item.count"
                @input="item.count = $event.target.value"
            />
          </column>
          <column :xs="2">
            <BaseToggle
                id="active"
                label="Active"
                :value="item.status"
                @change-value="item.status = $event"
            />
          </column>
          <column :xs="2" class="removeButton">
            <BaseButton
                icon="trash"
                type="submit"
                color="warning"
                direction="right"
                @click="removeProduct(index)"
            >Remove
            </BaseButton>
          </column>
        </row>
      </div>
    </div>
  </div>
</template>

<script>
import BaseMultiSelectSearch from "~/components/form/BaseMultiSelectSearch.vue";
import BaseButton from "~/components/form/BaseButton.vue";
import users from "~/service/api/user"
import client from "~/service/api/client"
import BaseInput from "~/components/form/BaseInput.vue";
import {Column, Row} from 'vue-grid-responsive';
import BaseToggle from "~/components/form/BaseToggle.vue";
import UserTag from "~/components/form/UserTag.vue";

export default {
  name: "ListCreateView",
  components: {
    UserTag,
    BaseToggle,
    BaseButton,
    BaseMultiSelectSearch,
    BaseInput,
    row: Row,
    column: Column,
  },
  data() {
    return {
      listName: null,
      owner: null,
      users: [],
      items: [],
    }
  },
  methods: {
    async usersLoader(query) {
      const response = await users.search(query)

      return response.data.items.map(item => {
        return {value: item.id, label: item.email}
      })
    },
    async productsLoader(query) {
      const response = await client.products()

      if (response.data.length === 0) {

        console.log('empty response', query)
        return [];
      }

      return response.data.items.map(item => {
        return {value: item.id, label: item.email}
      })
    },
    getInputId(parent, index) {
      return `${parent}_${index}`
    },
    addProduct() {
      this.items.push({
        product: null,
        count: null,
        status: true
      })
    },
    removeProduct(index) {
      this.items.splice(index, 1);
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  margin: 0 auto;

  .users-container {
    margin-top: 24px;

    ul.users-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      line-height: 1em;
    }
  }

  .title {
    margin-bottom: 40px;
  }

  .removeButton {
    text-align: center;
    margin-top: 18px;
  }

  .add-button-wrapper {
    text-align: left;
  }

  .products-header {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .items-list {
    margin-top: 40px;
  }
}
</style>
