/**
 * @constructor JSONEditor
 * @param {Element} container    Container element
 * @param {Object}  [options]    Object with options. available options:
 *                               {String} mode        Editor mode. Available values:
 *                                                    'tree' (default), 'view',
 *                                                    'form', 'text', and 'code'.
 *                               {function} onChange  Callback method, triggered
 *                                                    on change of contents.
 *                                                    Does not pass the contents itself.
 *                                                    See also `onChangeJSON` and
 *                                                    `onChangeText`.
 *                               {function} onChangeJSON  Callback method, triggered
 *                                                        in modes on change of contents,
 *                                                        passing the changed contents
 *                                                        as JSON.
 *                                                        Only applicable for modes
 *                                                        'tree', 'view', and 'form'.
 *                               {function} onChangeText  Callback method, triggered
 *                                                        in modes on change of contents,
 *                                                        passing the changed contents
 *                                                        as stringified JSON.
 *                               {function} onError   Callback method, triggered
 *                                                    when an error occurs
 *                               {Boolean} search     Enable search box.
 *                                                    True by default
 *                                                    Only applicable for modes
 *                                                    'tree', 'view', and 'form'
 *                               {Boolean} history    Enable history (undo/redo).
 *                                                    True by default
 *                                                    Only applicable for modes
 *                                                    'tree', 'view', and 'form'
 *                               {String} name        Field name for the root node.
 *                                                    Only applicable for modes
 *                                                    'tree', 'view', and 'form'
 *                               {Number} indentation     Number of indentation
 *                                                        spaces. 4 by default.
 *                                                        Only applicable for
 *                                                        modes 'text' and 'code'
 *                               {boolean} escapeUnicode  If true, unicode
 *                                                        characters are escaped.
 *                                                        false by default.
 *                               {boolean} sortObjectKeys If true, object keys are
 *                                                        sorted before display.
 *                                                        false by default.
 *                               {function} onSelectionChange Callback method,
 *                                                            triggered on node selection change
 *                                                            Only applicable for modes
 *                                                            'tree', 'view', and 'form'
 *                               {function} onTextSelectionChange Callback method,
 *                                                                triggered on text selection change
 *                                                                Only applicable for modes
 *                               {HTMLElement} modalAnchor        The anchor element to apply an
 *                                                                overlay and display the modals in a
 *                                                                centered location.
 *                                                                Defaults to document.body
 *                                                                'text' and 'code'
 *                               {function} onEvent Callback method, triggered
 *                                                  when an event occurs in
 *                                                  a JSON field or value.
 *                                                  Only applicable for
 *                                                  modes 'form', 'tree' and
 *                                                  'view'
 * @param {Object | undefined} json JSON object
 */
/// <reference types="jquery" />
export function JSONEditor(container: Element, options?: IJsonOptions, json?: any): void;

export interface IJsonOptions {
    mode?: string;
    onChange?: Function;
    onChangeJSON?: Function;
    onChangeText?: Function;
    onError?: Function;
    search?: boolean;
    history?: boolean;
    name?: string;
    indentation?: number;
    escapeUnicode?: boolean;
    sortObjectKeys?: boolean;
    onSelectionChange?: Function;
    onTextSelectionChange?: Function;
    modalAnchor?: HTMLElement;
    onEvent?: Function;
}