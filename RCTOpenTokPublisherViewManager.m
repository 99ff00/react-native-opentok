#import "RCTOpenTokPublisherViewManager.h"
#import "RCTOpenTokPublisherView.h"
#import "RCTComponent.h"

@implementation RCTOpenTokPublisherViewManager

- (UIView *)view {
    return [RCTOpenTokPublisherView new];
}

RCT_EXPORT_VIEW_PROPERTY(apiKey, NSString)
RCT_EXPORT_VIEW_PROPERTY(sessionId, NSString)
RCT_EXPORT_VIEW_PROPERTY(token, NSString)
RCT_EXPORT_VIEW_PROPERTY(onSessionStartFailure, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onConnected, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDisconnected, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onStreamCreated, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onStreamDestroyed, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onConnectionCreated, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onConnectionDestroyed, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onUnknownError, RCTDirectEventBlock)

@end
