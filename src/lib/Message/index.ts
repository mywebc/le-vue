import { default as MessageCom } from "./Message.vue";
import { createApp, h } from "vue";
export const Message = (options) => {
  const { message, type, duration, showClose, onClose } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        MessageCom,
        {
          visible: true,
          duration,
          message,
          type,
          showClose,
          onClose,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
        },
        {
        }
      );
    },
  });
  app.mount(div);
};
