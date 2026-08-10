<template>
  <div class="character-block">
    <div class="line-main">
      <span class="name">{{ name }}</span>
      <span class="stage" :style="{ color: accent }">{{ stage }}</span>
      <span class="value">{{ value }}</span>
    </div>
    <div v-if="voice" class="line-voice">{{ voice }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  stage: string;
  value: number;
  voice: string;
  accent: string;
}>();
</script>

<style lang="scss" scoped>
.character-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.line-main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  white-space: nowrap;
}

.name {
  color: var(--c-text);
  font-size: 12px;
}

.stage {
  font-size: 11px;
}

.value {
  color: var(--c-text-muted);
  font-size: 11px;
}

.line-voice {
  color: var(--c-text-muted);
  font-style: italic;
  font-size: 11px;
  padding-left: 1em;
  word-break: break-word;
}
</style>
