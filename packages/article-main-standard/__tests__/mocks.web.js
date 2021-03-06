jest.mock("react-helmet-async", () => ({ Helmet: "Helmet" }));
// eslint-disable-next-line global-require
jest.mock("@times-components/ad", () => require("./ad-mock"));
jest.mock("@times-components/article-byline", () => ({
  ArticleBylineWithLinks: "ArticleBylineWithLinks"
}));
jest.mock("@times-components/article-extras", () => "ArticleExtras");
jest.mock("@times-components/article-flag", () => ({
  ArticleFlags: "ArticleFlags"
}));
jest.mock("@times-components/article-image", () => "ArticleImage");
jest.mock("@times-components/article-topics", () => "ArticleTopics");
jest.mock("@times-components/date-publication", () => "DatePublication");
jest.mock("@times-components/image", () => "Image");
jest.mock("@times-components/interactive-wrapper", () => "InteractiveWrapper");
jest.mock("@times-components/link", () => ({
  __esModule: true,
  default: "Link",
  TextLink: "TextLink"
}));
jest.mock("@times-components/pull-quote", () => "PullQuote");
jest.mock("@times-components/related-articles", () => "RelatedArticles");
jest.mock("@times-components/video-label", () => "VideoLabel");
