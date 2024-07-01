<script setup>
import axios from "axios";
import { ElNotification } from "element-plus";

const props = defineProps({
  data: Array,
});

const handleDelete = async (id) => {
  console.log(id);
  try {
    const response = await axios.delete("https://dummyjson.com/products/" + id);
    console.log(response);
    if (response.status === 200) {
      ElNotification.success("Data o'chirildi");
    } else {
      ElNotification.error("Data o'chirilishda xatolik");
    }
  } catch (error) {
    ElNotification.error("Qandaydir xatolik");
  } finally {
    // ElNotification.info("So'rov yakunlandi");
    console.log("Yakunlandi");
  }
};
</script>

<template>
  <el-table :data="props.data" style="width: 100%">
    <el-table-column fixed prop="title" label="title" width="300" />
    <el-table-column prop="category" label="category" width="120" />
    <el-table-column prop="price" label="price" width="120" />
    <el-table-column prop="rating" label="rating" width="120" />
    <el-table-column prop="brand" label="brand" width="120" />
    <el-table-column prop="images" label="images" width="120">
      <template v-slot="item">
        <img
          :src="item.row.images"
          alt="product-image"
          class="w-10 rounded-full shadow-md"
        />
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template v-slot="item">
        <div class="flex gap-x-2">
          <router-link :to="`/admin/products/${item.row.id}`">
            <button
              type="button"
              class="py-1 px-2 bg-blue-500 text-white rounded-md"
            >
              Edit
            </button>
          </router-link>
          <el-popconfirm
            width="220"
            confirm-button-text="OK"
            cancel-button-text="No, Thanks"
            :icon="InfoFilled"
            icon-color="#626AEF"
            title="Are you sure to delete this?"
            @confirm="handleDelete(item.row.id)"
          >
            <template #reference>
              <el-button type="danger">Delete</el-button>
            </template>
          </el-popconfirm>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
