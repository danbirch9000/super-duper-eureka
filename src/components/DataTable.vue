<template>
  <div>
    <div :class="`data-table data-table-${size}`">
      <div class="data-table-header">
        <div class="data-table-row">
          <div
            v-for="(header, i) in headers"
            :key="i"
            class="data-table-header-cell"
          >
            <template v-if="header.sortable">
              <IconButton
                theme="blank"
                variant="chevron-down"
                size="sm"
                style="padding: 0;"
                right
              >
                {{ header.text }}
              </IconButton>
            </template>
            <template v-else>
              {{ header.text }}
            </template>
          </div>
        </div>
      </div>
      <div class="data-table-body">
        <div
          v-for="(row, j) in itemsPaginationSlices[activePageIndex]"
          :key="`row_${j}`"
          class="data-table-row"
        >
          <template v-for="(cell, propertyName, k) in row">
            <div :key="k" class="data-table-cell">
              <slot
                v-if="$scopedSlots[propertyName]"
                :name="`${propertyName}`"
                :cell="cell"
                :row="row"
                :index="j"
              />
              <template v-else>
                {{ cell }}
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="data-table-nav" style="display:none;">
      Page {{ activePageIndex + 1 }} of {{ itemsPaginationSlices.length }}
      <IconButton
        theme="default"
        variant="chevron-left"
        size="xs"
        @click="goToPrev"
      />

      <IconButton
        theme="default"
        variant="chevron-right"
        size="xs"
        @click="goToNext"
      />
    </div>
  </div>
</template>

<script>
import IconButton from "@/components/IconButton.vue";
export default {
  name: "DataTable",
  components: {
    IconButton
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "md"
    }
  },
  data() {
    return {
      itemsPerPage: 1000,
      activePageIndex: 0
    };
  },
  computed: {
    itemsMappedtoHeader() {
      return this.items.map(item => {
        let mappedItem = {};
        this.headers.forEach(header => {
          mappedItem[header.key] = item[header.key] || undefined;
        });
        return mappedItem;
      });
    },
    itemsPaginationSlices() {
      const length = this.items.length;
      const activePageIndex = Math.ceil(length / this.itemsPerPage);
      const slices = [];
      for (let i = 0; i < activePageIndex; i++) {
        let from = i * this.itemsPerPage;
        let to = from + this.itemsPerPage;
        slices.push(this.itemsMappedtoHeader.slice(from, to));
      }
      return slices;
    }
  },
  methods: {
    goToNext() {
      if (this.itemsPaginationSlices.length - 1 === this.activePageIndex) {
        return;
      }
      this.activePageIndex++;
    },
    goToPrev() {
      if (this.activePageIndex === 0) {
        return;
      }
      this.activePageIndex--;
    }
  }
};
</script>

<style lang="scss" scoped>
.data-table {
  width: 100%;
  display: table;

  &.data-table-sm {
    font-size: $font-size-sm;
    border-spacing: 0 space(1);
  }
  &.data-table-md {
    font-size: $font-size-sm;
    border-spacing: 0 space(2);
  }
}
.data-table-header {
  background: $color-theme-secondary;
  display: table-header-group;
}
.data-table-body {
  display: table-row-group;
}
.data-table-row {
  display: table-row;
}
.data-table-header-cell {
  font-weight: $font-weight-bold;
  color: white;
  display: table-cell;
  &:first-child {
    border-top-left-radius: $border-radius-sm;
  }
  &:last-child {
    border-top-right-radius: $border-radius-sm;
  }
  .data-table-sm & {
    padding: space(2) space(3);
  }
  .data-table-md & {
    padding: space(3);
  }
}
.data-table-cell {
  background: $color-mono-3;
  display: table-cell;
  .data-table-sm & {
    padding: space(2) space(3);
  }
  .data-table-md & {
    padding: space(3);
  }
}
</style>
