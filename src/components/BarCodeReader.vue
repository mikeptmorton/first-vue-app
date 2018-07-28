<template>
  <div>
    <div id="scannerContainer" v-show="scannerIsRunning"></div>
    <md-button class="md-raised md-primary" id="btn" v-on:click="startStopScanner">Start/Stop Scanner</md-button>

    <div>Detected Barcode: {{detectedCode}}</div>
  </div>
</template>

<script>
  import Quagga from 'quagga'; // ES6

  export default {
    name: 'bar-code-reader',
    data() {
      return {
        detectedCode: null,
        scannerIsRunning: false,
      };
    },
    methods: {
      startStopScanner() {
        if (this.scannerIsRunning) {
          Quagga.stop();
        } else {
          this.startScanner();
        }

        this.scannerIsRunning = !this.scannerIsRunning;
      },
      startScanner() {
        Quagga.init({
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#scannerContainer'),
            constraints: {
              width: 480,
              height: 320,
              facingMode: 'environment',
            },
          },
          decoder: {
            readers: [
              'code_128_reader',
              'ean_reader',
              'ean_8_reader',
              'code_39_reader',
              'code_39_vin_reader',
              'codabar_reader',
              'upc_reader',
              'upc_e_reader',
              'i2of5_reader',
            ],
            debug: {
              showCanvas: true,
              showPatches: true,
              showFoundPatches: true,
              showSkeleton: true,
              showLabels: true,
              showPatchLabels: true,
              showRemainingPatchLabels: true,
              boxFromPatches: {
                showTransformed: true,
                showTransformedBox: true,
                showBB: true,
              },
            },
          },
        }, (err) => {
          if (err) {
            console.log(err);
            return;
          }

          console.log('Initialization finished. Ready to start');
          Quagga.start();

          this.scannerIsRunning = true;
        });

        Quagga.onProcessed((result) => {
          const drawingCtx = Quagga.canvas.ctx.overlay;
          const drawingCanvas = Quagga.canvas.dom.overlay;

          if (result) {
            if (result.boxes) {
              drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 0), parseInt(drawingCanvas.getAttribute('height'), 0));
              result.boxes.filter(box => box !== result.box).forEach((box) => {
                Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: 'green', lineWidth: 2 });
              });
            }

            if (result.box) {
              Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 });
            }

            if (result.codeResult && result.codeResult.code) {
              Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            }
          }
        });

        Quagga.onDetected((result) => {
          this.detectedCode = result.codeResult.code;
        });
      },
    },
  };
</script>

<style>
  canvas.drawing, canvas.drawingBuffer {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>