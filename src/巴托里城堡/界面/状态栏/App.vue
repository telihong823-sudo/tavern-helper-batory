<template>
  <div class="status-bar">
    <CharacterBlock
      v-if="leona_present"
      name="莉奥娜"
      :stage="leona_stage"
      :value="store.data.莉奥娜.情欲值"
      :voice="store.data.莉奥娜.心声"
      accent="var(--c-accent-leona)"
    />
    <CharacterBlock
      v-if="vira_present"
      name="薇拉"
      :stage="vira_stage"
      :value="store.data.薇拉.依赖值"
      :voice="store.data.薇拉.心声"
      accent="var(--c-accent-vira)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CharacterBlock from './components/CharacterBlock.vue';
import { useDataStore } from './store';

const store = useDataStore();

/** 心声非空 = 在场（schema 约定：不在场时心声置为 ""） */
const leona_present = computed(() => store.data.莉奥娜.心声.trim().length > 0);
const vira_present = computed(() => store.data.薇拉.心声.trim().length > 0);

/** 莉奥娜·情欲值 阶段映射：0~25 拘谨期 / 26~50 松动期 / 51~75 主动期 / 76~100 放浪期 */
function leona_stage_of(value: number): string {
  if (value <= 25) return '拘谨期';
  if (value <= 50) return '松动期';
  if (value <= 75) return '主动期';
  return '放浪期';
}

/** 薇拉·依赖值 阶段映射：0~30 淡漠期 / 31~60 依赖期 / 61~100 粘人期 */
function vira_stage_of(value: number): string {
  if (value <= 30) return '淡漠期';
  if (value <= 60) return '依赖期';
  return '粘人期';
}

const leona_stage = computed(() => leona_stage_of(store.data.莉奥娜.情欲值));
const vira_stage = computed(() => vira_stage_of(store.data.薇拉.依赖值));
</script>

<style lang="scss" scoped>
.status-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: var(--c-text);
}

/* 双人在场时，第二个区块自然追加在下方，中间用极淡分隔线 */
.status-bar > :not(:first-child) {
  border-top: 1px solid var(--c-border);
  margin-top: 6px;
  padding-top: 6px;
}
</style>
