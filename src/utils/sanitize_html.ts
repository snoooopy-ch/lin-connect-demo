import sanitizeHtml from "sanitize-html";

const options = {
  allowedTags: [
    //    "style",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "hr",
    "nav",
    "section",
    "article",
    "figure",
    "figcaption",
    "caption",
    "col",
    "blockquote",
    "b",
    "q",
    "s",
    "small",
    "strong",
    "u",
    "center",
    "dd",
    "dl",
    "dt",
    "ul",
    "li",
    "ol",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "p",
    "br",
    "span",
    "pre",
    "code",
    "em",
    "cite",
    "a",
    "img",
    "font",
    "div",
    "page-link",
  ],
  allowedAttributes: {
    h1: ["id", "class", "style"],
    h2: ["id", "class", "style"],
    h3: ["id", "class", "style"],
    h4: ["id", "class", "style"],
    h5: ["id", "class", "style"],
    h6: ["id", "class", "style"],
    hgroup: ["id", "class", "style"],
    hr: ["id", "class", "style", "size", "noshade", "color", "align", "width"],
    nav: ["id", "class", "style"],
    section: ["id", "class", "style"],
    article: ["id", "class", "style"],
    figure: ["id", "class", "style"],
    ficaption: ["id", "class", "style"],
    caption: ["id", "class", "style"],
    col: ["id", "class", "style"],

    dd: ["id", "class", "style"],
    dl: ["id", "class", "style"],
    dt: ["id", "class", "style"],
    ul: ["id", "class", "style"],
    ol: ["id", "class", "style"],
    li: ["id", "class", "card_id", "style"],
    table: [
      "id",
      "class",
      "style",
      "border",
      "width",
      "cellspacing",
      "cellpadding",
      "bordercolor",
    ],
    th: [
      "id",
      "class",
      "style",
      "bgcolor",
      "align",
      "nowrap",
      "valign",
      "align",
    ],
    td: [
      "id",
      "class",
      "style",
      "bgcolor",
      "colspan",
      "align",
      "nowrap",
      "valign",
      "align",
    ],
    a: ["id", "class", "href", "to", "name", "hash", "target", "rel"],
    "page-link": ["id", "class", "href", "target", "rel"],
    p: ["id", "class", "style"],
    span: ["id", "class", "style"],
    img: ["id", "class", "src", "alt", "width", "height", "style"],
    style: ["*"],
    pre: ["*"],
    code: ["*"],
    div: ["id", "align", "class", "style"],
    br: ["class"],
    i: ["id", "class", "style"],
    font: ["id", "class", "color", "size", "style"],
  },
  allowedSchemes: ["http", "https"],
};

export default function $sanitize(dirty: string, option: object = {}): string {
  if (Object.keys(option).length > 0) {
    let tags = options.allowedTags;
    let opt = Object.assign(options, option);

    if ('allowedTags' in option && Array.isArray(option['allowedTags'])) {
      opt.allowedTags = tags.concat(option.allowedTags);
    }
    
    return sanitizeHtml(dirty, opt);
  } else {
    return sanitizeHtml(dirty);
  }
}

export function n2br(arg: string): string {
  return arg?.replace(/\r?\n/g, "<br>");
}
