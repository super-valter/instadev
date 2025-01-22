import { mount } from '@vue/test-utils';
import TopBar from '@/components/TopBar/index.vue';
import { describe, expect, it } from 'vitest';

describe('TopBar.vue', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(TopBar);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders all images correctly', () => {
    const wrapper = mount(TopBar);
    const images = wrapper.findAll('img');
    expect(images.length).toBe(4);
    expect(images[0]?.attributes('src')).toBeTruthy();
    expect(images[1]?.attributes('src')).toBeTruthy();
    expect(images[2]?.attributes('src')).toBeTruthy();
    expect(images[3]?.attributes('src')).toBeTruthy();
  });
});
