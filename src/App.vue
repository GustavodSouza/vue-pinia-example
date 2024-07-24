<template>
  <div>
    <h1>Using Pinia</h1>
    <hr>
    <h2>Counter</h2>
    {{ userStoreInstance.showCount }}
    <button @click="userStoreInstance.decrement">Decrement</button>
    <button @click="userStoreInstance.increment">Increment</button>
  </div>
  <div>
    <h2>List</h2>
    <ul>
      <li v-for="(item, index) in listStoreInstance.items" :key="index">{{ item }}</li>
    </ul>
    <input type="text" placeholder="Insert item" v-model="itemModel" />
    <button @click="addItem">Add item</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useCounterStore } from './stores/CounterStore' 
import { listStore } from './stores/ListStore'

export default {
  name: 'App',
  setup() {
    const userStoreInstance = useCounterStore()
    const listStoreInstance = listStore()
    
    return {
      userStoreInstance,
      listStoreInstance,
      itemModel: ref(''),
      addItem() {
        listStoreInstance.addItemInItems(this.itemModel)
      }
    }
  },
}
</script>
