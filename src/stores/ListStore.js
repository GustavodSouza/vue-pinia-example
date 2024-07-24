import { defineStore } from 'pinia'

export const listStore = defineStore('listStore', {
    state() {
        return {
            items: []
        }
    },

    actions: {
        addItemInItems(item) {
            this.items.push(item)
        }
    },

    getters: {
        getItems() {
            return this.items
        }
    }
})