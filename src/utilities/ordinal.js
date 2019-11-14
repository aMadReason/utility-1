function ordinal(number) {
  const rule = new Intl.PluralRules("en-gb", { type: "ordinal" });
  // rule.slect returns one of the following
  const ordinals = {
    one: "st",
    two: "nd",
    few: "rd",
    many: "th",
    zero: "th",
    other: "th"
  };

  return `${number}${ordinals[rule.select(number)]}`;
}

export default ordinal;
