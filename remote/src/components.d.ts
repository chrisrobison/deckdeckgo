/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  DeckdeckgoSlideDefinition,
} from '@deckdeckgo/types';

export namespace Components {
  interface AppAbout {}
  interface AppAccelerometer {
    'hide': boolean;
  }
  interface AppDraw {
    'height': number;
    'heightOffset': number;
    'moveDraw': (leftOffset: number, transitionDuration: string) => Promise<void>;
    'slides': number;
    'width': number;
  }
  interface AppRemote {
    'room': string;
  }
  interface AppRemoteConnect {}
  interface AppRemoteSettings {}
  interface AppRemoteSlidePicker {
    'slides': DeckdeckgoSlideDefinition[];
  }
  interface AppRoot {}
  interface AppStopwatch {
    'length': number;
    'remaining': number;
  }
  interface AppStopwatchTime {}
  interface AppTabs {}
  interface AppTimer {}
}

declare global {


  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppAccelerometerElement extends Components.AppAccelerometer, HTMLStencilElement {}
  var HTMLAppAccelerometerElement: {
    prototype: HTMLAppAccelerometerElement;
    new (): HTMLAppAccelerometerElement;
  };

  interface HTMLAppDrawElement extends Components.AppDraw, HTMLStencilElement {}
  var HTMLAppDrawElement: {
    prototype: HTMLAppDrawElement;
    new (): HTMLAppDrawElement;
  };

  interface HTMLAppRemoteElement extends Components.AppRemote, HTMLStencilElement {}
  var HTMLAppRemoteElement: {
    prototype: HTMLAppRemoteElement;
    new (): HTMLAppRemoteElement;
  };

  interface HTMLAppRemoteConnectElement extends Components.AppRemoteConnect, HTMLStencilElement {}
  var HTMLAppRemoteConnectElement: {
    prototype: HTMLAppRemoteConnectElement;
    new (): HTMLAppRemoteConnectElement;
  };

  interface HTMLAppRemoteSettingsElement extends Components.AppRemoteSettings, HTMLStencilElement {}
  var HTMLAppRemoteSettingsElement: {
    prototype: HTMLAppRemoteSettingsElement;
    new (): HTMLAppRemoteSettingsElement;
  };

  interface HTMLAppRemoteSlidePickerElement extends Components.AppRemoteSlidePicker, HTMLStencilElement {}
  var HTMLAppRemoteSlidePickerElement: {
    prototype: HTMLAppRemoteSlidePickerElement;
    new (): HTMLAppRemoteSlidePickerElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppStopwatchElement extends Components.AppStopwatch, HTMLStencilElement {}
  var HTMLAppStopwatchElement: {
    prototype: HTMLAppStopwatchElement;
    new (): HTMLAppStopwatchElement;
  };

  interface HTMLAppStopwatchTimeElement extends Components.AppStopwatchTime, HTMLStencilElement {}
  var HTMLAppStopwatchTimeElement: {
    prototype: HTMLAppStopwatchTimeElement;
    new (): HTMLAppStopwatchTimeElement;
  };

  interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {}
  var HTMLAppTabsElement: {
    prototype: HTMLAppTabsElement;
    new (): HTMLAppTabsElement;
  };

  interface HTMLAppTimerElement extends Components.AppTimer, HTMLStencilElement {}
  var HTMLAppTimerElement: {
    prototype: HTMLAppTimerElement;
    new (): HTMLAppTimerElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
    'app-accelerometer': HTMLAppAccelerometerElement;
    'app-draw': HTMLAppDrawElement;
    'app-remote': HTMLAppRemoteElement;
    'app-remote-connect': HTMLAppRemoteConnectElement;
    'app-remote-settings': HTMLAppRemoteSettingsElement;
    'app-remote-slide-picker': HTMLAppRemoteSlidePickerElement;
    'app-root': HTMLAppRootElement;
    'app-stopwatch': HTMLAppStopwatchElement;
    'app-stopwatch-time': HTMLAppStopwatchTimeElement;
    'app-tabs': HTMLAppTabsElement;
    'app-timer': HTMLAppTimerElement;
  }
}

declare namespace LocalJSX {
  interface AppAbout extends JSXBase.HTMLAttributes<HTMLAppAboutElement> {}
  interface AppAccelerometer extends JSXBase.HTMLAttributes<HTMLAppAccelerometerElement> {
    'hide'?: boolean;
  }
  interface AppDraw extends JSXBase.HTMLAttributes<HTMLAppDrawElement> {
    'height'?: number;
    'heightOffset'?: number;
    'onDrawing'?: (event: CustomEvent<boolean>) => void;
    'slides'?: number;
    'width'?: number;
  }
  interface AppRemote extends JSXBase.HTMLAttributes<HTMLAppRemoteElement> {
    'room'?: string;
  }
  interface AppRemoteConnect extends JSXBase.HTMLAttributes<HTMLAppRemoteConnectElement> {}
  interface AppRemoteSettings extends JSXBase.HTMLAttributes<HTMLAppRemoteSettingsElement> {}
  interface AppRemoteSlidePicker extends JSXBase.HTMLAttributes<HTMLAppRemoteSlidePickerElement> {
    'slides'?: DeckdeckgoSlideDefinition[];
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppStopwatch extends JSXBase.HTMLAttributes<HTMLAppStopwatchElement> {
    'length'?: number;
    'remaining'?: number;
  }
  interface AppStopwatchTime extends JSXBase.HTMLAttributes<HTMLAppStopwatchTimeElement> {}
  interface AppTabs extends JSXBase.HTMLAttributes<HTMLAppTabsElement> {}
  interface AppTimer extends JSXBase.HTMLAttributes<HTMLAppTimerElement> {}

  interface IntrinsicElements {
    'app-about': AppAbout;
    'app-accelerometer': AppAccelerometer;
    'app-draw': AppDraw;
    'app-remote': AppRemote;
    'app-remote-connect': AppRemoteConnect;
    'app-remote-settings': AppRemoteSettings;
    'app-remote-slide-picker': AppRemoteSlidePicker;
    'app-root': AppRoot;
    'app-stopwatch': AppStopwatch;
    'app-stopwatch-time': AppStopwatchTime;
    'app-tabs': AppTabs;
    'app-timer': AppTimer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


