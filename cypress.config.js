const { defineConfig } = require("cypress");
const fs = require('fs-extra');

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
       on('before:run', async () => {
        await fs.remove('cypress/QAReport');
      });
    },
    baseUrl:"https://www.saucedemo.com/",
    // viewportWidth: 440,
    // viewportHeight:400,
    // watchForFileChanges:false,
    screenshotOnRunFailure : false ,
    screenshotsFolder: "QAScreenshots",
    videosFolder:"QAVideos",
    trashAssetsBeforeRuns:true,
    video:false,
    videoCompression:20, 
    reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/QAReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
      },   
}});
