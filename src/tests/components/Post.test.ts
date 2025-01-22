import { Quasar } from 'quasar';

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Post from '@/components/Post/index.vue';

const wrapper = mount(Post, {
  global: {
    plugins: [Quasar]
  },
});

const postUser = wrapper.find('.post-user');
const postImg = wrapper.find('.post-img');
const postInteractions = wrapper.find('.post-interactions');
const postLikes = wrapper.find('.post-likes');
const postContent = wrapper.find('.post-content');
const postDate = wrapper.find('.post-date');

describe('Post.vue', () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);

    expect(postUser.exists()).toBe(true);

    expect(postImg.exists()).toBe(true);

    expect(postInteractions.exists()).toBe(true);

    expect(postLikes.exists()).toBe(true);

    expect(postContent.exists()).toBe(true);

    expect(postDate.exists()).toBe(true);
  });

  it('checks if there is an image inside q-avatar', () => {
    const avatar = postUser.findComponent('.q-avatar');
    expect(avatar.exists()).toBe(true);
    const img = avatar.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('https://cdn.quasar.dev/img/avatar.png');
  });

  it('checks if there is name and location text', () => {
    const nameLocation = postUser.find('.name-location');
    expect(nameLocation.exists()).toBe(true);

    const strong = nameLocation.find('strong');
    expect(strong.exists()).toBe(true);
    expect(strong.text()).toBe('Nome');

    const span = nameLocation.find('span');
    expect(span.exists()).toBe(true);
    expect(span.text()).toBe('Tokyo, Japan');
  });

  it('toggles like on double click', async () => {
    const img = postImg.find('.likned-post');
    await img.trigger('dblclick');
    expect(wrapper.vm.liked).toBe(true);
    setTimeout(() => {
      expect(wrapper.vm.liked).toBe(false);
    }, 510);
  });

  it('renders the like button and count', () => {
    const boxQtdLikes = postInteractions.find('.qtd-likes');
    const img = boxQtdLikes.find('img');
    expect(boxQtdLikes.exists()).toBe(true);
    expect(img.attributes('src')).toBeTruthy();

    const likeCount = boxQtdLikes.text();
    expect(likeCount).toContain('9.000');
  });

  it('renders the comment button and count', () => {
    const boxComment = postInteractions.find('.comments');
    const img = boxComment.find('img');
    expect(boxComment.exists()).toBe(true);
    expect(img.attributes('src')).toBeTruthy();

    const commentCount = boxComment.text();
    expect(commentCount).toContain('545');
  });

  it('renders the direct message button and count', () => {
    const boxDirect = postInteractions.find('.post-shipping');
    const img = boxDirect.find('img');
    expect(boxDirect.exists()).toBe(true);
    expect(img.attributes('src')).toBeTruthy();

    const directCount = boxDirect.text();
    expect(directCount).toContain('54');
  });

  it('renders the save button', () => {
    const boxDirect = postInteractions.find('.saved');
    const img = boxDirect.find('img');
    expect(boxDirect.exists()).toBe(true);
    expect(img.attributes('src')).toBeTruthy();
  });

  it('render post text', () => {
    const textName = postContent.find('strong');
    const textSeeMore = postContent.find('span');
    expect(textName.text()).toContain('Nome');
    expect(textSeeMore.text()).toContain('...mais');
  });

  it('render post date', () => {
    expect(postDate.text()).toContain('1 dia');
  });
});
