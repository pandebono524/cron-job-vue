<template>
  <div v-html="iconComponent" class="flex items-center" @click="$emit('click', $event)">
  </div>
</template>

<script setup lang="ts">
import { shallowRef, onMounted, watch } from 'vue';

const props = defineProps<{
  name: string;
  active?: boolean;
}>();

const iconComponent = shallowRef<null | any>(null);

const gradientDef = `
    <defs>
      <linearGradient id="sidebar-gradient" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C8239B" offset="7.73%"/>
        <stop stop-color="#5944DF" offset="95.41%"/>
      </linearGradient>
    </defs>
  `;

const processSvg = (svg: string) => {
  if (props.name === 'activate' || props.name === 'favourite') {
    if (props.active) {
      if (props.name === 'activate') {
        svg = svg.replace(/fill="[^"]*"/g, 'fill="#1560BD"');
      } else if (props.name === 'favourite') {
        svg = svg.replace(/fill="[^"]*"/g, 'fill="#FFC107"');
      }
    } else {
      if (props.name === 'favourite') {
        return '';
      }
      svg = svg.replace(/fill="[^"]*"/g, 'fill="#D1D5DB"');
    }
    return svg;
  }

  if (props.active) {
    svg = svg.replace(/stroke="[^"]*"/g, 'stroke="url(#sidebar-gradient)"');
    svg = svg.replace(/<path((?!stroke=)[^>])*?>/g, (match) => {
      if (!/stroke=/.test(match)) {
        return match.replace('<path', '<path stroke="url(#sidebar-gradient)"');
      }
      return '';
    });
    if (!svg.includes('id="sidebar-gradient"')) {
      svg = svg.replace(/<svg([^>]*)>/, `<svg$1>${gradientDef}`);
    }
  } else {
    svg = svg.replace(/stroke="[^"]*"/g, 'stroke="#000"');
  }
  return svg;
};

const loadIcon = async (iconName: string) => {
  try {
    const module = await import(`../assets/svg/${iconName}.svg?raw`);
    iconComponent.value = processSvg(module.default);
  } catch (error) {
    console.error(`Error loading icon: ${iconName}`, error);
    iconComponent.value = null;
  }
};

onMounted(() => {
  loadIcon(props.name);
});

watch(() => props.name, (newName) => {
  loadIcon(newName);
});

watch(() => props.active, () => {
  loadIcon(props.name);
});
</script>

<style lang="scss" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

svg {
  height: 1em;
  width: auto;
  display: inline-block;

  :deep(path),
  :deep(rect) {
    &.icon-stroke-none {
      stroke: none;
    }

    &.icon-fill-none {
      fill: none;
    }

    &.icon-stroke {
      stroke: #64748B;
    }

    &.icon-fill {
      fill: #64748B;
    }
  }

  :deep(.rotating) {
    animation: rotate 10s linear infinite;
    transform-origin: center center;
  }
}

[data-theme='dark'] {
  svg {
    :deep(path) {
      .icon-stroke {
        stroke: #8598B2;
      }

      .icon-fill {
        fill: #8598B2;
      }
    }
  }
}
</style>