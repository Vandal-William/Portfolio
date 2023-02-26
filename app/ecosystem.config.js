module.exports = {
  apps : [{
    name: 'portfolio',
    script: 'index.js',
    autorestart: true,
    watch: '.'
  }],

  deploy : {
    production : {
      user : process.env.USER,
      host : process.env.HOST,
      ref  : process.env.REF,
      repo : process.env.REPO,
      path : process.env.PATH,
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 startOrRestart ecosystem.config.js',
      'pre-setup': ''
    }
  }
};
