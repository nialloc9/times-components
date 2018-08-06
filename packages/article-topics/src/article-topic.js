import React from "react";
import { Text, View } from "react-native";
import Link from "@times-components/link";
import { withTrackEvents } from "@times-components/tracking";
import styles from "./styles";
import propTypes from "./article-topic-prop-types";

const ArticleTopic = ({ name, onPress, slug }) => (
  <View style={styles.spacer}>
    <Link onPress={e => onPress(e, { name, slug })} url={`/topic/${slug}`}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Link>
  </View>
);

ArticleTopic.propTypes = propTypes;

export default withTrackEvents(ArticleTopic, {
  analyticsEvents: [
    {
      eventName: "onPress",
      actionName: "Pressed",
      trackingName: "TopicLink",
      getAttrs: ({ name, slug }) => ({
        name,
        slug
      })
    }
  ]
});
