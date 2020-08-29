declare module '*.vue' {
    //@ts-ignore
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }