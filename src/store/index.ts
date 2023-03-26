import { reactive } from 'vue';

interface State {
  news: any[];
}

export const state = reactive<State>({
  news: []
});