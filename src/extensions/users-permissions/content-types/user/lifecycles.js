module.exports = {
  async afterCreate(event) {
    await strapi.plugin('algolia').service('algolia').index(event.model.uid, event.result);
  },
  async afterUpdate(event) {
    await strapi.plugin('algolia').service('algolia').index(event.model.uid, event.result);
  },
  async afterDelete(event) {
    await strapi.plugin('algolia').service('algolia').delete(event.model.uid, event.params.where.id);
  },
};
