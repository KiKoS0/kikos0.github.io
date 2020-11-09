// import * as wasm from "wasm-client";

// import { RayTracerRuntime } from "wasm-client";
// // importScripts("wasm_client.js")


//  //let test = wasm.get_image();
//  //console.log(test);

// // const runtime = RayTracerRuntime.new();
// // console.log(runtime);

// // var myWorker = new Worker('worker.js');


// // wasm_bindgen = wasm.wasm_bindgen;
// console.log(wasm)
// console.log(RayTracerRuntime)


// wasm.greet("KiKoS");

// wasm_bindgen = wasm.wasm_bindgen;

// First up, but try to do feature detection to provide better error messages

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const timing = document.getElementById('timing');
const timingVal = document.getElementById('timing-val');


function loadWasm() {
    let msg = 'This demo requires a current version of Firefox (e.g., 79.0)';
    if (typeof SharedArrayBuffer !== 'function') {
        alert('this browser does not have SharedArrayBuffer support enabled' + '\n\n' + msg);
        return
    }
    // Test for bulk memory operations with passive data segments
    //  (module (memory 1) (data passive ""))
    const buf = new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00,
        0x05, 0x03, 0x01, 0x00, 0x01, 0x0b, 0x03, 0x01, 0x01, 0x00]);
    if (!WebAssembly.validate(buf)) {
        alert('this browser does not support passive wasm memory, demo does not work' + '\n\n' + msg);
        return
    }

    wasm_bindgen('./wasm_client_bg.wasm')
        .then(run)
        .catch(console.error);
}

loadWasm();

const { WorkerPool,RayTracerRuntime } = wasm_bindgen;

let rendering = null;
let start = null;
let interval = null;
let pool = null;

class State {
    constructor(wasm) {
        this.start = performance.now();
        this.wasm = wasm;
        this.running = true;
        this.counter = 1;

        canvas.width = wasm.width;
        canvas.height = wasm.height;

        this.interval = setInterval(() => this.updateTimer(true), 100);

        wasm.promise()
            .then(data => {
                this.updateTimer(false);
                this.updateImage(data);
                this.stop();
            })
            .catch(console.error);
    }

    updateTimer(updateImage) {
        const dur = performance.now() - this.start;
        timingVal.innerText = `${dur}ms`;
        this.counter += 1;

        if (updateImage && this.wasm && this.counter % 3 == 0){
            // this.updateImage(this.wasm.imageSoFar());
        }
    }

    updateImage(data) {
        ctx.putImageData(data, 0, 0);
    }

    stop() {
        if (!this.running)
            return;
        console.timeEnd('render');
        this.running = false;
        this.wasm = null;
        clearInterval(this.interval);
        // button.disabled = false;
    }
}



function run() {
    pool = new WorkerPool(navigator.hardwareConcurrency);
    console.log(pool)

    render(RayTracerRuntime.new());
}


function render(scene) {
    if (rendering) {
      rendering.stop();
      rendering = null;
    }
    rendering = new State(scene.render(navigator.hardwareConcurrency, pool));
  }
  