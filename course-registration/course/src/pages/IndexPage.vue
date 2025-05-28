<template>
  <q-page class="row items-center justify-evenly">

    <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab name="student"  label="Student Portal" />
        <q-tab name="course"  label="Course Portal" />
        <q-tab name="registration" label="Registration Portal" />
      </q-tabs>
      </div>
      </div>

        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="student">
            <div class="text-h4 q-mb-md">Student</div>
            <StudentPortal></StudentPortal>
          </q-tab-panel>

          <q-tab-panel name="course">
            <div class="text-h4 q-mb-md">course</div>
            <CoursePortal></CoursePortal>
          </q-tab-panel>

          <q-tab-panel name="registration">
            <div class="text-h4 q-mb-md">Registration</div>
            <RegistrationPortal></RegistrationPortal>
          </q-tab-panel>
        </q-tab-panels>

  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StudentPortal from './studentPortal.vue';
import CoursePortal from './coursePortal.vue';
import RegistrationPortal from './registrationPortal.vue';

const tab = ref("student")

</script>
