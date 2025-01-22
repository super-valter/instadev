import { mount } from '@vue/test-utils';
import StoriesUpdate from '@/components/StoriesUpdate/index.vue';
import { describe, expect, it } from 'vitest';
import { Quasar } from 'quasar';

const wrapper = mount(StoriesUpdate, {
  global: {
    plugins: [Quasar]
  },
});

describe('StoriesUpdate.vue', () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 10 story items', () => {
    const storyItems = wrapper.findAll('.stories-item');
    expect(storyItems.length).toBe(10);
  });

  it('renders avatar images', () => {
    const avatars = wrapper.findAll('.q-avatar img.avatar');
    expect(avatars.length).toBe(10);
    avatars.forEach(avatar => {
      expect(avatar.attributes('src')).toBe('https://cdn.quasar.dev/img/avatar.png');
    });
  });

  it('renders names for each story item', () => {
    const names = wrapper.findAll('.stories-item span');
    expect(names.length).toBe(10);
    names.forEach(name => {
      expect(name.text()).toBe('Nome');
    });
  });
});
