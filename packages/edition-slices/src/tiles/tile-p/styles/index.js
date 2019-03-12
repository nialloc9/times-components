import {
  colours,
  fonts,
  fontFactory,
  fontSizes,
  spacing
} from "@times-components/styleguide";

const styles = {
  bylineOpinion: {
    color: colours.section.comment,
    fontFamily: fonts.supporting,
    fontSize: fontSizes.cardMetaMobile,
    letterSpacing: 0.6,
    lineHeight: 12
  },
  container: {
    alignItems: "center",
    paddingVertical: spacing(4)
  },
  headline: breakpoint => ({
    color: colours.functional.brandColour,
    ...fontFactory({
      font: "headline",
      fontSize: "tileLeadHeadline",
      breakpoint: breakpoint,
      tileName: "TileP"
    }),
    paddingHorizontal: spacing(2),
    paddingTop: spacing(2),
    textAlign: "center"
  }),
  imageContainer: {
    borderColor: colours.functional.contrast,
    borderWidth: 1,
    overflow: "hidden",
    width: "30%"
  },
  strapline: {
    color: colours.functional.secondary,
    fontSize: fontSizes.meta,
    lineHeight: 20,
    paddingHorizontal: spacing(8),
    textAlign: "center"
  },
  summaryContainer: {
    alignItems: "center",
    paddingTop: spacing(2)
  }
};

export default styles;
