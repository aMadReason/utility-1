// adapted from https://medium.com/@thebabscraig/javascript-design-patterns-part-2-the-publisher-subscriber-pattern-8fe07e157213

const pubSub = {
  subs: {},
  publish(event, data) {
    if (!this.subs[event]) return;
    this.subs[event].forEach(subCallback => subCallback(data));
  },
  subscribe(event, callback) {
    if (!this.subs[event]) this.subs[event] = [];
    const index = this.subs[event].push(callback) - 1;
    return { unsubscribe: () => this.subs[event].splice(index, 1) };
  }
};

export default pubSub;

/**usage example
const subscriber1 = pubSub.subscribe("anEvent", data => {
  console.log(`"anEvent", was published with this data: "${data.moo}"`);
});

pubSub.publish("anEvent", { moo: "123" });
pubSub.publish("anEvent", { moo: "321" });

subscriber1.unsubscribe();

pubSub.publish("anEvent", { moo: "heeey" }); 
 */
