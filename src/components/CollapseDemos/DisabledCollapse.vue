<demo>
禁用状态
</demo>
<template>
  <Collapse>
    <collapse-item title="This is panel header 1">
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
    </collapse-item>
    <collapse-item title="This is panel header 2">
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
    </collapse-item>
    <collapse-item title="This is panel header 3" disabled>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
      <p>
        A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it
        can be found as a welcome guest in many households across the world.
      </p>
    </collapse-item>
  </Collapse>
</template>

<script lang="ts">
import Collapse from "../../lib/Collapse/Collapse.vue";
import CollapseItem from "../../lib/Collapse/CollapseItem.vue";
export default {
  components: { Collapse, CollapseItem },
};
</script>
