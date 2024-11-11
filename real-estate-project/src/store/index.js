import { createStore } from 'vuex';
import todoItems from '@/store/modules/todoItems';

const store = createStore({
  namespaced:true,
    modules: {
        todoItems
    },
});

export default store;
