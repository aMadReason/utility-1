// useful snippets: https://github.com/30-seconds/30-seconds-of-code#readme
import "./styles.css";

import uuid from "./utilities/uuid";
import { getPercentOfValue } from "./utilities/percentage";
import ordinal from "./utilities/ordinal";
import roundPrecision from "./utilities/roundPrecision";
import { randomInt, randomDec } from "./utilities/random";
import pubsub from "./utilities/pubsub";
import Router from "./utilities/Router";
import getUrlParams from "./utilities/getUrlParams";
import randomSubset from "./utilities/randomSubset";

const demos = {
  ordinal: { selector: "#ordinals" },
  roundPrecision: { selector: "#round-precision" },
  getPercentOfValue: { selector: "#percentage-of-val" },
  uuid: { selector: "#uuid" },
  randomInt: { selector: "#random-int" },
  randomDec: { selector: "#random-dec" },
  pubsub: { selector: "#pub-sub" },
  routing: { selector: "#router" },
  urlGet: { selector: "#urlGet" },
  subset: { selector: "#subset" }
};

// select demo div
Object.keys(demos).map(k => (demos[k].el = document.querySelector(demos[k].selector)));

const sub = pubsub.subscribe("event-name", data =>
  console.log(`Wowee, "event-name" was published! with ${JSON.stringify(data, null, 2)}`)
);

pubsub.publish("event-name", { moo: 123 });
sub.unsubscribe();
pubsub.publish("event-name", { moo: 321 }); // this wont trigger a console log as we unsubscribed

demos.urlGet.el.innerHTML = `
  <fieldset>
    <legend>getUrlParams(string)</legend>

    <p>you can also use url encoded strings (via php rawURLEncode()</p>

<p><code>getUrlParams('https://www.wolvdev.com/modbox?topic=1&reason=blah')</code> returns ${JSON.stringify(
  getUrlParams("https://www.wolvdev.com/modbox?topic=1&reason=blah")
)}</p>
  </fieldset>
`;

demos.pubsub.el.innerHTML = `
<fieldset>
<legend>pubsub</legend>
<p>
<code style=" white-space: pre">
const sub = pubsub.subscribe("event-name", data =>
  console.log(
    'Wowee, "event-name" was published! with \${JSON.stringify(data, null, 2)}'
  )
);

pubsub.publish("event-name", { moo: 123 });
sub.unsubscribe();
pubsub.publish("event-name", { moo: 321 }); // this wont trigger a console log as we unsubscribed
</code>
</p>
</fieldset>
`;

demos.ordinal.el.innerHTML = `
 <fieldset>
    <legend>ordinal(Number)</legend>
    <p><code>ordinal(1)</code> returns ${ordinal(1)}</p>
    <p><code>ordinal(2)</code> returns ${ordinal(2)}</p>
    <p><code>ordinal(3)</code> returns ${ordinal(3)}</p>
    <p><code>ordinal(4)</code> returns ${ordinal(4)}</p>
    <p><code>ordinal(11)</code> returns ${ordinal(11)}</p>
    <p><code>ordinal(50)</code> returns ${ordinal(50)}</p>
    <p><code>ordinal(0)</code> returns ${ordinal(0)}</p> 
 </fieldset>
`;

demos.roundPrecision.el.innerHTML = `
  <fieldset>
    <legend>roundPrecision(number, decimals)</legend>
    <p><code>roundPrecision(7.578947368421053,2)</code> returns ${roundPrecision(
      7.578947368421053,
      2
    )}</p>
  </fieldset>
`;

demos.getPercentOfValue.el.innerHTML = `
  <fieldset>
    <legend>getPercentOfValue(of, from)</legend>
    <p><code>getPercentOfValue(50, 100)</code> returns ${getPercentOfValue(50, 100)}</p>
    <p><code>getPercentOfValue(5, 100)</code> returns ${getPercentOfValue(5, 300)}</p>
  </fieldset>
`;

demos.uuid.el.innerHTML = `
  <fieldset>
    <legend>uuid()</legend>
    <p><code>uuid()</code> returns ${uuid()}</p>
    <p><code>uuid()</code> returns ${uuid()}</p>
    <p><code>uuid()</code> returns ${uuid()}</p>
  </fieldset>
`;

demos.randomInt.el.innerHTML = `
  <fieldset>
    <legend>randomInt(low? = 1, high? = 6)</legend>
    <p><code>randomInt()</code> returns ${randomInt()}</p>
    <p><code>randomInt(1, 6)</code> returns ${randomInt(1, 6)}</p>
    <p><code>randomInt(1, 20)</code> returns ${randomInt(1, 20)}</p>
    <p><code>randomInt(-10, 0)</code> returns ${randomInt(-10, 0)}</p>
  </fieldset>
`;

demos.randomDec.el.innerHTML = `
  <fieldset>
    <legend>randomDec(low? = 1, high? = 6, toFixed? = 1)</legend>
    <p><code>randomDec()</code> returns ${randomDec()}</p>
    <p><code>randomDec(0, 0.5)</code> returns ${randomDec(0, 0.5)}</p>
    <p><code>randomDec(0, 0.1, 2)</code> returns ${randomDec(0, 0.1, 2)}</p>
  </fieldset>
`;

demos.routing.el.innerHTML = `
  <fieldset>
    <legend>new Router( routes = [{ path: "/", template: ""}])</legend>

    <header>
    <ul>
      <li><button data-route="">Home</button></li>
      <li><button data-route="about">About</button></li>
      <li><button data-route="contact">Contact</button></li>
    </ul>
  </header>
  <div data-router-outlet>
    <h1>Hello!</h1>
  </div>
  </fieldset>
`;
const routes = [
  {
    path: "/",
    template: "<h1>Home</h1>"
  },
  {
    path: "/about",
    template: "<h1>About</h1>"
  },
  {
    path: "/contact",
    template: "<h1>Contact</h1>"
  }
];
const outlet = document.querySelector("[data-router-outlet]");
const router = new Router(routes, outlet);
const routeBtn = Array.from(demos.routing.el.querySelectorAll("[data-route]"));
routeBtn.map(i => {
  i.addEventListener("click", e => {
    const route = e.target.getAttribute("data-route");
    return router.loadRoute(route);
  });
});

demos.subset.el.innerHTML = `
  <fieldset>
    <legend>randomSubset(n = 1, array = [])</legend>
    <p><code>randomDec(2, [1, 2, 3, 4, 5])</code> returns ${randomSubset(2, [1, 2, 3, 4, 5])}</p>
  </fieldset>
`;
