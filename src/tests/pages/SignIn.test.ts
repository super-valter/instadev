import { Quasar } from 'quasar'

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import SignIn from '@/pages/SignIn/index.vue';

const wrapper = mount(SignIn, {
  global: {
    plugins: [Quasar]
  },
});

describe('SignIn.vue', () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has the correct initial data', () => {
    expect(wrapper.vm.login).toBe('');
    expect(wrapper.vm.password).toBe('');
  });

  it('renders the logo image', () => {
    const logo = wrapper.find('.logo');
    expect(logo.exists()).toBe(true);
  });

  it('renders the login button', () => {
    const button = wrapper.find('.sing-in-button');
    expect(button.exists()).toBe(true);
  });
});
