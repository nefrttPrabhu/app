import axios from "axios";
import * as cheerio from "cheerio";

export const extractContent = async (url, html, type) => {
  if (html) {
    const $ = cheerio.load(html);
    const text = $("body").text().trim().slice(0, 2000);
    const title = $("title").text() || "Untitled";
    return { title, text, metadata: { source: url, tags: [type] } };
  }

  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const title = $("title").text();
  const text = $("article").text() || $("body").text();
  return { title, text, metadata: { source: url } };
};
