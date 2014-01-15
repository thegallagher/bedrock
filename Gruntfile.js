module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    git_ftp: {
      staging: {
        hostFile: 'config/deploy.json',
        host: 'staging'
      },
      production: {
        hostFile: 'config/deploy.json',
        host: 'production'
      }
    }
  });

  // Load Modules
  grunt.loadNpmTasks('grunt-git-ftp');

  // Tasks
  grunt.registerTask('default', ['deploy']);
  grunt.registerTask('deploy', function(environment) {
    if (!environment) {
      environment = 'staging';
    }
    grunt.task.run('git_ftp:' + environment);
  });

};