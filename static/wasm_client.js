let wasm_bindgen;(function(){function a(a){return y[a]}function b(a){36>a||(y[a]=z,z=a)}function c(c){const d=a(c);return b(c),d}function d(){return(null===B||B.buffer!==w.__wbindgen_export_0.buffer)&&(B=new Uint8Array(w.__wbindgen_export_0.buffer)),B}function e(a,b,c){if(void 0===c){const c=C.encode(a),e=b(c.length);return d().subarray(e,e+c.length).set(c),A=c.length,e}let e=a.length,f=b(e);const g=d();let h=0;for(;h<e;h++){const b=a.charCodeAt(h);if(127<b)break;g[f+h]=b}if(h!==e){0!==h&&(a=a.slice(h)),f=c(f,e,e=h+3*a.length);const b=d().subarray(f+h,f+e),g=D(a,b);h+=g.written}return A=h,f}function f(){return(null===E||E.buffer!==w.__wbindgen_export_0.buffer)&&(E=new Int32Array(w.__wbindgen_export_0.buffer)),E}function g(a,b){return F.decode(d().slice(a,a+b))}function h(a){z===y.length&&y.push(y.length+1);const b=z;return z=y[b],y[b]=a,b}function i(a){return a===void 0||null===a}function j(a){const b=typeof a;if("number"==b||"boolean"==b||null==a)return`${a}`;if("string"==b)return`"${a}"`;if("symbol"==b){const b=a.description;return null==b?"Symbol":`Symbol(${b})`}if("function"==b){const b=a.name;return"string"==typeof b&&0<b.length?`Function(${b})`:"Function"}if(Array.isArray(a)){const b=a.length;let c="[";0<b&&(c+=j(a[0]));for(let d=1;d<b;d++)c+=", "+j(a[d]);return c+="]",c}const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(1<c.length)d=c[1];else return toString.call(a);if("Object"==d)try{return"Object("+JSON.stringify(a)+")"}catch(a){return"Object"}return a instanceof Error?`${a.name}: ${a.message}\n${a.stack}`:d}function k(a,b,c,d){const e={a:a,b:b,cnt:1,dtor:c},f=(...b)=>{e.cnt++;const c=e.a;e.a=0;try{return d(c,e.b,...b)}finally{0==--e.cnt?w.__wbindgen_export_3.get(e.dtor)(c,e.b):e.a=c}};return f.original=e,f}function l(a,b,c){w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h40e419e8c3043e6d(a,b,h(c))}function m(a,b,c){w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h41c914a024c941fc(a,b,h(c))}function n(a,b,c){w._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h41c914a024c941fc(a,b,h(c))}function o(a,b){if(!(a instanceof b))throw new Error(`expected instance of ${b.name}`);return a.ptr}function p(a){if(1==G)throw new Error("out of js stack");return y[--G]=a,G}function q(a){return function(){try{return a.apply(this,arguments)}catch(a){w.__wbindgen_exn_store(h(a))}}}function r(a,b){return d().subarray(a/1,a/1+b)}function s(a,b,c,d){w.wasm_bindgen__convert__closures__invoke2_mut__h617d0b276d6cc26c(a,b,h(c),h(d))}async function t(a,b,c){if("function"==typeof Response&&a instanceof Response){if(x=b.wbg.memory=new WebAssembly.Memory({initial:17,maximum:16384,shared:!0}),"function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if("application/wasm"!=a.headers.get("Content-Type"))console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",b);else throw b}const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{x=b.wbg.memory=c;const d=await WebAssembly.instantiate(a,b);return d instanceof WebAssembly.Instance?{instance:d,module:a}:d}}async function u(b,d){if("undefined"==typeof b){let a;a="undefined"==typeof document?location.href:document.currentScript.src,b=a.replace(/\.js$/,"_bg.wasm")}const o={};o.wbg={},o.wbg.__wbindgen_object_drop_ref=function(a){c(a)},o.wbg.__wbindgen_json_serialize=function(b,c){const d=a(c);var g=JSON.stringify(void 0===d?null:d),h=e(g,w.__wbindgen_malloc,w.__wbindgen_realloc),i=A;f()[b/4+1]=i,f()[b/4+0]=h},o.wbg.__wbg_new_f42c313ed803d742=q(function(b,c,d){var e=new ImageData(a(b),c,d);return h(e)}),o.wbg.__wbg_log_8f01fb7dc2c2d9c8=function(a,b){console.log(g(a,b))},o.wbg.__wbg_log_9f2bd196db61a1b9=function(b){console.log(a(b))},o.wbg.__wbg_alert_8d364dfd3f8f0910=function(a,b){alert(g(a,b))},o.wbg.__wbindgen_string_new=function(a,b){var c=g(a,b);return h(c)},o.wbg.__wbindgen_object_clone_ref=function(b){var c=a(b);return h(c)},o.wbg.__wbindgen_cb_drop=function(a){const b=c(a).original;if(1==b.cnt--)return b.a=0,!0;return!1},o.wbg.__wbindgen_number_new=function(a){return h(a)},o.wbg.__wbindgen_jsval_eq=function(b,c){var d=a(b)===a(c);return d},o.wbg.__wbg_waitAsync_2ee251cbb9f4e7b6=function(){var a=Atomics.waitAsync;return h(a)},o.wbg.__wbindgen_is_undefined=function(b){var c=void 0===a(b);return c},o.wbg.__wbg_waitAsync_628ee99ccc7155e6=function(b,c,d){var e=Atomics.waitAsync(a(b),c,d);return h(e)},o.wbg.__wbg_value_38ccedac77f1ebf0=function(b){var c=a(b).value;return h(c)},o.wbg.__wbg_getRandomValues_11115a852729f4e8=q(function(b,c){a(b).getRandomValues(a(c))}),o.wbg.__wbg_randomFillSync_a2d002fc3b8e30f7=q(function(b,c,d){a(b).randomFillSync(r(c,d))}),o.wbg.__wbg_self_a5f0fe5564782787=q(function(){var a=self.self;return h(a)}),o.wbg.__wbg_require_29e58b5f6f133563=q(function(b,c,d){var e=a(b).require(g(c,d));return h(e)}),o.wbg.__wbg_crypto_d91429ea1a087f70=function(b){var c=a(b).crypto;return h(c)},o.wbg.__wbg_msCrypto_c8be2bb4fc7d8cd3=function(b){var c=a(b).msCrypto;return h(c)},o.wbg.__wbg_static_accessor_MODULE_7f278c5446c126c8=function(){return h(v)},o.wbg.__wbg_instanceof_ErrorEvent_f732d789863821fd=function(b){var c=a(b)instanceof ErrorEvent;return c},o.wbg.__wbg_message_93ec62e3f591f30d=function(b,c){var d=a(c).message,g=e(d,w.__wbindgen_malloc,w.__wbindgen_realloc),h=A;f()[b/4+1]=h,f()[b/4+0]=g},o.wbg.__wbg_instanceof_MessageEvent_bf1ff48fdc2c056a=function(b){var c=a(b)instanceof MessageEvent;return c},o.wbg.__wbg_data_5202563349cacee4=function(b){var c=a(b).data;return h(c)},o.wbg.__wbg_type_7df10f9c9c76b0b0=function(b,c){var d=a(c).type,g=e(d,w.__wbindgen_malloc,w.__wbindgen_realloc),h=A;f()[b/4+1]=h,f()[b/4+0]=g},o.wbg.__wbg_setonmessage_ac429956bee8333f=function(b,c){a(b).onmessage=a(c)},o.wbg.__wbg_setonerror_6984a567816484e9=function(b,c){a(b).onerror=a(c)},o.wbg.__wbg_new_be9a6fc5d944160e=q(function(a,b){var c=new Worker(g(a,b));return h(c)}),o.wbg.__wbg_postMessage_cdafff11f21a3c59=q(function(b,c){a(b).postMessage(a(c))}),o.wbg.__wbg_postMessage_048e2aa1055be67d=q(function(b,c){a(b).postMessage(a(c))}),o.wbg.__wbg_call_8e95613cc6524977=q(function(b,c){var d=a(b).call(a(c));return h(d)}),o.wbg.__wbg_self_07b2f89e82ceb76d=q(function(){var a=self.self;return h(a)}),o.wbg.__wbg_window_ba85d88572adc0dc=q(function(){var a=window.window;return h(a)}),o.wbg.__wbg_globalThis_b9277fc37e201fe5=q(function(){var a=globalThis.globalThis;return h(a)}),o.wbg.__wbg_global_e16303fe83e1d57f=q(function(){var a=global.global;return h(a)}),o.wbg.__wbg_newnoargs_f3b8a801d5d4b079=function(a,b){var c=new Function(g(a,b));return h(c)},o.wbg.__wbg_encodeURIComponent_e5c53e1c04882590=function(a,b){var c=encodeURIComponent(g(a,b));return h(c)},o.wbg.__wbg_new_e13110f81ae347cf=function(){return h([])},o.wbg.__wbg_of_c0fdee514e26e119=function(b,c,d){var e=Array.of(a(b),a(c),a(d));return h(e)},o.wbg.__wbg_push_b46eeec52d2b03bb=function(b,c){var d=a(b).push(a(c));return d},o.wbg.__wbg_call_d713ea0274dfc6d2=q(function(b,c,d){var e=a(b).call(a(c),a(d));return h(e)}),o.wbg.__wbg_new_d0c63652ab4d825c=function(a,b){try{var c={a:a,b:b},d=(b,d)=>{const e=c.a;c.a=0;try{return s(e,c.b,b,d)}finally{c.a=e}},e=new Promise(d);return h(e)}finally{c.a=c.b=0}},o.wbg.__wbg_resolve_2529512c3bb73938=function(b){var c=Promise.resolve(a(b));return h(c)},o.wbg.__wbg_then_4a7a614abbbe6d81=function(b,c){var d=a(b).then(a(c));return h(d)},o.wbg.__wbg_buffer_49131c283a06686f=function(b){var c=a(b).buffer;return h(c)},o.wbg.__wbg_new_066196c5e92c30d6=function(b){var c=new Int32Array(a(b));return h(c)},o.wbg.__wbg_length_2b13641a9d906653=function(b){var c=a(b).length;return c},o.wbg.__wbg_new_9b295d24cf1d706f=function(b){var c=new Uint8Array(a(b));return h(c)},o.wbg.__wbg_set_3bb960a9975f3cd2=function(b,c,d){a(b).set(a(c),d>>>0)},o.wbg.__wbg_new_0cba93ba92e34de7=function(b){var c=new Uint8ClampedArray(a(b));return h(c)},o.wbg.__wbg_newwithlength_3c570aeea9a95954=function(a){var b=new Uint8Array(a>>>0);return h(b)},o.wbg.__wbg_subarray_4eaeb3de00cf1955=function(b,c,d){var e=a(b).subarray(c>>>0,d>>>0);return h(e)},o.wbg.__wbg_slice_8af316ba914062a3=function(b,c,d){var e=a(b).slice(c>>>0,d>>>0);return h(e)},o.wbg.__wbindgen_string_get=function(b,c){const d=a(c);var g="string"==typeof d?d:void 0,h=i(g)?0:e(g,w.__wbindgen_malloc,w.__wbindgen_realloc),j=A;f()[b/4+1]=j,f()[b/4+0]=h},o.wbg.__wbindgen_debug_string=function(b,c){var d=j(a(c)),g=e(d,w.__wbindgen_malloc,w.__wbindgen_realloc),h=A;f()[b/4+1]=h,f()[b/4+0]=g},o.wbg.__wbindgen_throw=function(a,b){throw new Error(g(a,b))},o.wbg.__wbindgen_rethrow=function(a){throw c(a)},o.wbg.__wbindgen_module=function(){var a=u.__wbindgen_wasm_module;return h(a)},o.wbg.__wbindgen_memory=function(){var a=w.__wbindgen_export_0;return h(a)},o.wbg.__wbindgen_closure_wrapper223=function(a,b){var c=k(a,b,64,l);return h(c)},o.wbg.__wbindgen_closure_wrapper297=function(a,b){var c=k(a,b,97,m);return h(c)},o.wbg.__wbindgen_closure_wrapper298=function(a,b){var c=k(a,b,97,n);return h(c)},("string"==typeof b||"function"==typeof Request&&b instanceof Request||"function"==typeof URL&&b instanceof URL)&&(b=fetch(b));const{instance:p,module:v}=await t(await b,o,d);return w=p.exports,u.__wbindgen_wasm_module=v,w.__wbindgen_start(),w}const v={};let w,x;const y=Array(32).fill(void 0);y.push(void 0,null,!0,!1);let z=y.length,A=0,B=null,C=new TextEncoder("utf-8");const D=function(a,b){const c=C.encode(a);return b.set(c),{read:a.length,written:c.length}};let E=null,F=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});F.decode(),v.greet=function(a){var b=e(a,w.__wbindgen_malloc,w.__wbindgen_realloc),c=A;w.greet(b,c)},v.get_image=function(){w.get_image()};let G=32;v.child_entry_point=function(a){w.child_entry_point(a)};class H{static __wrap(a){const b=Object.create(H.prototype);return b.ptr=a,b}free(){const a=this.ptr;this.ptr=0,w.__wbg_raytracerruntime_free(a)}render(a,b){var c=this.ptr;this.ptr=0,o(b,J);var d=w.raytracerruntime_render(c,a,b.ptr);return I.__wrap(d)}static new(a){try{var b=w.raytracerruntime_new(p(a));return H.__wrap(b)}finally{y[G++]=void 0}}}v.RayTracerRuntime=H;class I{static __wrap(a){const b=Object.create(I.prototype);return b.ptr=a,b}free(){const a=this.ptr;this.ptr=0,w.__wbg_renderingscene_free(a)}get width(){var a=w.__wbg_get_renderingscene_width(this.ptr);return a>>>0}set width(a){w.__wbg_set_renderingscene_width(this.ptr,a)}get height(){var a=w.__wbg_get_renderingscene_height(this.ptr);return a>>>0}set height(a){w.__wbg_set_renderingscene_height(this.ptr,a)}promise(){var a=w.renderingscene_promise(this.ptr);return c(a)}imageSoFar(){var a=w.renderingscene_imageSoFar(this.ptr);return c(a)}}v.RenderingScene=I;class J{static __wrap(a){const b=Object.create(J.prototype);return b.ptr=a,b}free(){const a=this.ptr;this.ptr=0,w.__wbg_workerpool_free(a)}constructor(a){var b=w.workerpool_new(a);return J.__wrap(b)}}v.WorkerPool=J,wasm_bindgen=Object.assign(u,v)})();