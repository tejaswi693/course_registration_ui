<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table title="Student Records" :rows="students" :columns="columns" row-key="student_id" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type Student from 'src/components/models';
import { api } from 'src/boot/axios';

const students = ref<Student[]>([]);

const getStudents = async () => {
  const res = await api.get(`/api/student`);
  console.log(res.data);
  students.value = res.data;
};
const columns = [
  {
    name: 'ID',
    required: true,
    label: 'student ID',
    align: 'left',
    field: (row) => row.student_id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'name',
    required: true,
    label: 'student name',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'email',
    required: true,
    label: 'email',
    align: 'left',
    field: (row) => row.email,
    format: (val) => `${val}`,
    sortable: true,
  },
];

onMounted(async () => {
  await getStudents();
});
</script>
