/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  InlineAction,
} from './components/inline-editor/deckdeckgo-inline-editor.interface';

export namespace Components {
  interface DeckgoInlineEditor {
    'attachTo': HTMLElement;
    'containers': string;
    'customActions': string;
    'imgAnchor': string;
    'imgEditable': boolean;
    'imgPropertyCssFloat': string;
    'imgPropertyWidth': string;
    'list': boolean;
    'mobile': boolean;
    'reset': (clearSelection: boolean, blurActiveElement?: boolean) => Promise<void>;
    'stickyDesktop': boolean;
    'stickyMobile': boolean;
  }
}

declare global {


  interface HTMLDeckgoInlineEditorElement extends Components.DeckgoInlineEditor, HTMLStencilElement {}
  var HTMLDeckgoInlineEditorElement: {
    prototype: HTMLDeckgoInlineEditorElement;
    new (): HTMLDeckgoInlineEditorElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-inline-editor': HTMLDeckgoInlineEditorElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoInlineEditor extends JSXBase.HTMLAttributes<HTMLDeckgoInlineEditorElement> {
    'attachTo'?: HTMLElement;
    'containers'?: string;
    'customActions'?: string;
    'imgAnchor'?: string;
    'imgEditable'?: boolean;
    'imgPropertyCssFloat'?: string;
    'imgPropertyWidth'?: string;
    'list'?: boolean;
    'mobile'?: boolean;
    'onCustomAction'?: (event: CustomEvent<InlineAction>) => void;
    'onImgDidChange'?: (event: CustomEvent<HTMLElement>) => void;
    'onLinkCreated'?: (event: CustomEvent<HTMLElement>) => void;
    'onStickyToolbarActivated'?: (event: CustomEvent<boolean>) => void;
    'stickyDesktop'?: boolean;
    'stickyMobile'?: boolean;
  }

  interface IntrinsicElements {
    'deckgo-inline-editor': DeckgoInlineEditor;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


