import Message from "./Message.vue";
import { createApp, h } from "vue";
export const messageOpen = (options) => {
  const { message } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Message,
        {
          visible: true,
          // "onUpdate:visible": (newVisible) => {
          //   if (newVisible === false) {
          //     close();
          //   }
          // },
          message
        },
        // {
        //   title,
        //   content,
        // }
      );
    },
  });
  app.mount(div);
};
