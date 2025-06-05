const { contextBridge } = require('electron');
const { cariTandaBilangan } = require('./utils');

contextBridge.exposeInMainWorld('api', {
  cariTandaBilangan
});
