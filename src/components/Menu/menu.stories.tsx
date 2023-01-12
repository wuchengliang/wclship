import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
//import WelcomeMDX from '../Welcome/Welcome.stories.mdx'
import Menu from "./menu";
import SubMenu from "./subMenu";
import MenuItem from "./menuItem";

// https://github.com/storybookjs/storybook/issues/15574
const menuMeta: ComponentMeta<typeof Menu> = {
  title: "第六章：Menu",
  component: Menu,
  subcomponents: { subMenu: SubMenu, item: MenuItem },
  args: {
    defaultIndex: "1",
  },
  argTypes: {
    defaultIndex: {
      control: "color",
      description: "normal test",
    },
  },
};
export default menuMeta;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title="下拉选项">
      <MenuItem>下拉选项一</MenuItem>
      <MenuItem>下拉选项二</MenuItem>
    </SubMenu>
  </Menu>
);

export const DefaultMenu = Template.bind({});
DefaultMenu.storyName = "默认Menu";

export const ClickMenu = Template.bind({});
ClickMenu.args = {
  defaultIndex: "0",
  mode: "vertical",
};
ClickMenu.argTypes = {
  defaultIndex: {
    control: "text", //可以在这里设置单独的属性 的用的是input还是颜色选择器等，也可以全局设置
  },
};
ClickMenu.storyName = "纵向的 Menu";
