
// in this file you can append custom step methods to 'I' object

module.exports = () => {
  return actor({
    goTo: async function([page_url, in_Page]) {
      await this.amOnPage(page_url);
      in_Page.prototype = this;
      return in_Page;
    },
    amOn: async function([page_url, in_Page]){
      this.seeInCurrentUrl(page_url);
      in_Page.prototype = this;
      return in_Page;
    }
  });
}
