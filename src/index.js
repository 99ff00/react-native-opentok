import React from 'react';
import { NativeModules, NativeAppEventEmitter } from 'react-native';
import SubscriberView from './components/SubscriberView';
import PublisherView from './components/PublisherView';

const listeners = {};

const Session = {
  sendMessage: NativeModules.RNOpenTokSession.sendMessage,
  onMessageReceived(callback) {
    if (!listeners.onMessageReceived) {
      listeners.onMessageReceived = NativeAppEventEmitter.addListener(
        'onMessageReceived',
        (e) => callback(e)
      );
    }
  },
  stopListener() {
    if (listeners.onMessageReceived) {
      listeners.onMessageReceived.remove();
      Reflect.deleteProperty(this.props.listeners, 'onMessageReceived');
    }
  },
};

export default {
  ...NativeModules.RNOpenTok,
  Session,
  SubscriberView: (props) => <SubscriberView listeners={listeners} {...props} />,
  PublisherView: (props) => <PublisherView listeners={listeners} {...props} />,
};
