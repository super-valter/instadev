import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import BottonBar from '@/components/BottonBar/index.vue';

describe('BottonBar.vue', () => {
  it('renders the component', () => {
    const wrapper = mount(BottonBar);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders all icons and avatar', () => {
    const wrapper = mount(BottonBar);
    const icons = wrapper.findAll('img');
    expect(icons.length).toBe(5);
  });
});
