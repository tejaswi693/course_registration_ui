<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table title="Courses available" :rows="courses" :columns="columns" row-key="course_id" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';
import type Course  from 'src/components/models';

const courses = ref<Course[]>([]);

const getCourses = async () => {
  const res = await api.get(`/api/course`);
  console.log(res.data);
  courses.value = res.data;
};
const columns = [
  {
    name: 'ID',
    required: true,
    label: 'student ID',
    align: 'left',
    field: (row) => row.course_id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'name',
    required: true,
    label: 'student name',
    align: 'left',
    field: (row) => row.title,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'email',
    required: true,
    label: 'email',
    align: 'left',
    field: (row) => row.description,
    format: (val) => `${val}`,
    sortable: true,
  },
];

onMounted(async () => {
  await getCourses();
});
</script>
