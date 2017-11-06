/* @flow */

/**
 * ViewPropTypes package is shipped together with React
 */
// eslint-disable-next-line
import type { ViewProps } from "ViewPropTypes";

export type MessageEvent = {|
  sessionId: string,
  type: string,
  data: string,
|};

export type RNOpenTokEventCallback = (event: { [key: string]: string }) => void;

export type OpenTokEvent =
  | 'onSignalReceived'
  | 'onSessionConnectionCreated'
  | 'onSessionConnectionDestroyed'
  | 'onSessionDidConnect'
  | 'onSessionDidDisconnect'
  | 'onSessionDidFailWithError'
  | 'onSessionStreamCreated'
  | 'onSessionStreamDestroyed';

type OpenTokViewProps = {|
  ...$Exact<ViewProps>,
  /**
   * Dirty fix; default definition "React$PropType$Primitive<any>" clashed with itself
   */
  accessibilityLabel?: any,
  sessionId: string,
  mute?: boolean,
|};

type Listeners = {|
  listeners: {
    [listenerName: string]: RNOpenTokEventCallback,
  },
|};

export type PublisherProps = {|
  ...OpenTokViewProps,
  audioDisabled?: boolean,
  videoDisabled?: boolean,
  onPublishStart?: () => void,
  onPublishStop?: () => void,
  onPublishError?: () => void,
|};

export type SubscriberProps = {|
  ...OpenTokViewProps,
  onSubscribeStart?: () => void,
  onSubscribeStop?: () => void,
  onSubscribeError?: () => void,
|};

export type SubscriberViewProps = {
  ...SubscriberProps,
  ...Listeners,
};

export type PublisherViewProps = {
  ...PublisherProps,
  ...Listeners,
};
