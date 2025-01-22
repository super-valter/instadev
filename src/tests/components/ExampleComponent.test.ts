import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import ExampleComponent from '@/components/exemplos/ExampleComponent.vue';
import type { Todo, Meta } from 'components/exemplos/models';

interface IProps {
  todo?: Todo[];
  title: string;
  meta: Meta;
  active: boolean;
}

const props = {
  propsData: {
    title: 'string',
    meta: {
      totalCount: 1,
    },
    active: true,
    todos: [
      { id: 1, content: 'Todo 1' },
      { id: 2, content: 'Todo 2' },
    ],
  } as IProps
};

describe('ExampleComponent', () => {
  it('has the correct default', () => {
    const component = mount(ExampleComponent, props);
    expect(component).toBeDefined();
  });

  it('has the correct default props', () => {
    const component = mount(ExampleComponent, props);
    expect(component.vm.meta.totalCount).toEqual(1);
  });

  it('has the correct default props', () => {
    const component = mount(ExampleComponent, props);
    expect(component.vm.meta.totalCount).not.toEqual(2);
  });

  it('has the correct default props', () => {
    const component = mount(ExampleComponent, props);
    expect(component.vm.active).toBeTruthy();
  });

  it('has the correct default props', () => {
    const component = mount(ExampleComponent, props);
    expect(component.vm.title).toEqual('string');
    expect(component.text()).toContain('string')
  });
});
