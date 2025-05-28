

module.exports = {
  'algolia': {
    enabled: true,
    config: {
      applicationId: 'N23G0LDVTN',
      apiKey: 'ccc8daad75a6ddf03ae54e42c0a4c15b', 
      prefix: '',
      debug: true,
      contentTypes: {
        'plugin::users-permissions.user': {
          index: 'strapi-users',
          fields: ['username', 'email']
        }
      }
    }
  }
};

