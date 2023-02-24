module.exports = {
  apps : [{
    name: 'portfolio',
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '51.91.251.65',
      ref  : 'origin/main',
      repo : 'git@github.com:Vandal-William/Portfolio.git',
      path : '/home/ubuntu/Portfolio',
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 startOrRestart ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
