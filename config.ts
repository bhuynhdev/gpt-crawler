import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://ceas.uc.edu",
  match: "https://ceas.uc.edu/**/*.html",
  maxPagesToCrawl: 2000,
  selector: "#content",
  outputFileName: "output-ceas.json",
  collegeName: "University of Cincinnati"
};
