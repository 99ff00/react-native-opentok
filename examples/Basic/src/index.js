/**
 * Copyright (c) 2015-present, Callstack Sp z o.o.
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { PublisherView, SubscriberView } from 'react-native-opentok';
import { fetch } from './fetch';
import { OPENTOK_API_KEY, SESSION_ID, PUBLISHER_TOKEN } from './variables';

class Basic extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Publisher</Text>
        {!!publisherToken && (
          <PublisherView
            apiKey={OPENTOK_API_KEY}
            sessionId={SESSION_ID}
            token={PUBLISHER_TOKEN}
            style={{ width: 300, height: 200 }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Basic', () => Basic);
