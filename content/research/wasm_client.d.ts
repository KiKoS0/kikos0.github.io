/* tslint:disable */
/* eslint-disable */
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
*/
export function get_image(): void;
/**
* Entry point invoked by `worker.js`, a bit of a hack but see the "TODO" above
* about `worker.js` in general.
* @param {number} ptr
*/
export function child_entry_point(ptr: number): void;
/**
*/
export class RayTracerRuntime {
  free(): void;
/**
* @returns {number}
*/
  data(): number;
/**
* @param {number} workers_num
* @param {WorkerPool} pool
* @returns {RenderingScene}
*/
  render(workers_num: number, pool: WorkerPool): RenderingScene;
/**
* @returns {RayTracerRuntime}
*/
  static new(): RayTracerRuntime;
}
/**
*/
export class RenderingScene {
  free(): void;
/**
* Returns the JS promise object which resolves when the render is complete
* @returns {Promise<any>}
*/
  promise(): Promise<any>;
/**
* Return a progressive rendering of the image so far
* @returns {any}
*/
  imageSoFar(): any;
/**
* @returns {number}
*/
  height: number;
/**
* @returns {number}
*/
  width: number;
}
/**
*/
export class WorkerPool {
  free(): void;
/**
* Creates a new `WorkerPool` which immediately creates `initial` workers.
*
* The pool created here can be used over a long period of time, and it
* will be initially primed with `initial` workers. Currently workers are
* never released or gc'd until the whole pool is destroyed.
*
* # Errors
*
* Returns any error that may happen while a JS web worker is created and a
* message is sent to it.
* @param {number} initial
*/
  constructor(initial: number);
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly greet: (a: number, b: number) => void;
  readonly __wbg_raytracerruntime_free: (a: number) => void;
  readonly raytracerruntime_data: (a: number) => number;
  readonly raytracerruntime_render: (a: number, b: number, c: number) => number;
  readonly raytracerruntime_new: () => number;
  readonly __wbg_renderingscene_free: (a: number) => void;
  readonly __wbg_get_renderingscene_width: (a: number) => number;
  readonly __wbg_set_renderingscene_width: (a: number, b: number) => void;
  readonly __wbg_get_renderingscene_height: (a: number) => number;
  readonly __wbg_set_renderingscene_height: (a: number, b: number) => void;
  readonly renderingscene_promise: (a: number) => number;
  readonly renderingscene_imageSoFar: (a: number) => number;
  readonly get_image: () => void;
  readonly __wbg_workerpool_free: (a: number) => void;
  readonly workerpool_new: (a: number) => number;
  readonly child_entry_point: (a: number) => void;
  readonly __wbindgen_export_0: WebAssembly.Memory;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h40e419e8c3043e6d: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha7cbd401ba1966c2: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h617d0b276d6cc26c: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
* @param {WebAssembly.Memory} maybe_memory
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>, maybe_memory: WebAssembly.Memory): Promise<InitOutput>;
        