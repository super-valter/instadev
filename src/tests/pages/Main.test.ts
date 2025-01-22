import { Quasar } from 'quasar'

import { mount } from '@vue/test-utils';
import MainPage from '@/pages/Main/index.vue';

import { describe, expect, it } from 'vitest';

const wrapper = mount(MainPage, {
  global: {
    plugins: [Quasar]
  },
});

describe('MainPage.vue', () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the top bar', () => {
    expect(wrapper.findComponent({ name: 'TopBar' }).exists()).toBe(true);
  });

  it('renders the stories update section', () => {
    expect(wrapper.findComponent({ name: 'StoriesUpdate' }).exists()).toBe(true);
  });

  it('renders 10 posts', () => {
    const posts = wrapper.findAllComponents({ name: 'Post' });
    expect(posts.length).toBe(10);
  });

  it('renders the botton bar', () => {
    expect(wrapper.findComponent({ name: 'BottonBar' }).exists()).toBe(true);
  });
});
