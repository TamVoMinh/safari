
// in this file you can append custom step methods to 'I' object

module.exports = () => {
  return actor({
    accessTo: async function([page_url, in_Page]) {
      await this.amOnPage(page_url);
      return in_Page;
    }
  });
}
