import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.app',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
} as NativeScriptConfig;
import VueDevtools from 'nativescript-vue-devtools';
import Vue from 'nativescript-vue';

Vue.use(VueDevtools);
