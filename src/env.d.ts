/// <reference types="vite/client" />
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "@karpeleslab/klbfw";
declare module "@karpeleslab/i18next-klb-backend";
