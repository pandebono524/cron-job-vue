<template>
  <div v-html="iconComponent" class="flex items-center" @click="$emit('click', $event)">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import activateSvg from '../assets/svg/activate.svg?raw';
import affiliateSvg from '../assets/svg/affiliate.svg?raw';
import arrowDownSvg from '../assets/svg/arrow-down.svg?raw';
import arrowLeftSvg from '../assets/svg/arrow-left.svg?raw';
import arrowRightSvg from '../assets/svg/arrow-right.svg?raw';
import dashboardSvg from '../assets/svg/dashboard.svg?raw';
import favouriteSvg from '../assets/svg/favourite.svg?raw';
import infoSvg from '../assets/svg/info.svg?raw';
import linksSvg from '../assets/svg/links.svg?raw';
import listsSvg from '../assets/svg/lists.svg?raw';
import premiumSvg from '../assets/svg/premium.svg?raw';
import premiumUpgradeSvg from '../assets/svg/premium_upgrade.svg?raw';
import providersSvg from '../assets/svg/providers.svg?raw';
import reportsSvg from '../assets/svg/reports.svg?raw';
import searchSvg from '../assets/svg/search.svg?raw';
import sidebarSvg from '../assets/svg/sidebar.svg?raw';
import trackerSvg from '../assets/svg/tracker.svg?raw';
import upgradeSvg from '../assets/svg/upgrade.svg?raw';
import usdSvg from '../assets/svg/usd.svg?raw';
import vueSvg from '../assets/svg/vue.svg?raw';

const props = defineProps<{
  name: string;
  active?: boolean;
}>();

const svgMap = {
  activate: activateSvg,
  affiliate: affiliateSvg,
  'arrow-down': arrowDownSvg,
  'arrow-left': arrowLeftSvg,
  'arrow-right': arrowRightSvg,
  dashboard: dashboardSvg,
  favourite: favouriteSvg,
  info: infoSvg,
  links: linksSvg,
  lists: listsSvg,
  premium: premiumSvg,
  premium_upgrade: premiumUpgradeSvg,
  providers: providersSvg,
  reports: reportsSvg,
  search: searchSvg,
  sidebar: sidebarSvg,
  tracker: trackerSvg,
  upgrade: upgradeSvg,
  usd: usdSvg,
  vue: vueSvg,
};

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

const iconComponent = computed(() => {
  const svgContent = svgMap[props.name as keyof typeof svgMap];
  if (!svgContent) {
    console.warn(`SVG icon "${props.name}" not found`);
    return '';
  }
  return processSvg(svgContent);
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