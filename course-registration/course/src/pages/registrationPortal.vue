<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 400px">
      <q-select
        filled
        v-model="register.student_id"
        :options="students"
        option-label="name"
        option-value="student_id"
        label="Select Students"
        emit-value
      />
      <q-select
        filled
        v-model="register.course_ids"
        :options="courses"
        multiple
        option-label="title"
        option-value="course_id"
        label="Select courses"
        emit-value
      />
      <q-input v-model="register.registration_date" label="Enter the date" stack-label />

      <br />
      <br />
      <div>
        <q-btn label="Submit" @click="onsubmit()" color="primary" />
        <q-btn label="Reset" @click="onReset()" color="primary" flat class="q-ml-sm" />
      </div>
    </div>

    <div class="q-pa-md" v-if="!showTable">
      <q-table
        title="Registered students"
        :rows="registrations"
        :columns="columns"
        row-key="registration_id"

    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="mode_edit" @click="onEdit(props.row)"></q-btn>
          <q-btn icon="delete" @click="onDelete(props.row)"></q-btn>
        </q-td>
  </template>
      </q-table>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import type Course from 'src/components/models';
import type Student from 'src/components/models';
import { Registration } from 'src/components/models';
import { onMounted, ref } from 'vue';

const columns = [
  {
    name: 'studentID',
    required: true,
    label: 'student ID',
    align: 'left',
    field: (row) => row.student_id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'courses',
    required: true,
    label: 'courses ',
    align: 'left',
    field: (row) => row.course_ids,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'date',
    required: true,
    label: 'registered at',
    align: 'left',
    field: (row) => row.registration_date,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Actions',
    required: true,
    label: 'Actions',
  },

];
const registrations = ref<Registration[]>([]);
const getRegisteredStudents = async () => {
  const res = await api.get(`api/registration/getRegistrations`);
  console.log(res.data);
  registrations.value = res.data;
};

const register = ref<Registration>({} as Registration);
const students = ref<Student[]>([]);

const getStudents = async () => {
  const res = await api.get(`/api/student`);
  console.log(res.data);
  students.value = res.data;
};

const courses = ref<Course[]>([]);

const getCourses = async () => {
  const res = await api.get(`/api/course`);
  console.log(res.data);
  courses.value = res.data;
};

onMounted(async () => {
  await getStudents();
  await getCourses();
  await getRegisteredStudents();
});

function onReset() {
  register.value.student_id = null;
  register.value = {} as Course;
}
const showTable = ref(false);
const onsubmit = async () => {
  const res = await api.post(`/api/student/registration`, register.value);
  console.log(res.data);

  showTable.value = true;
};

const onEdit = async (registration : Registration) => {

}

const onDelete = async (registration : Registration) => {

}
</script>
