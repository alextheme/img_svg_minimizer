export default {
    webp: {
        src: 'src/**/*.{jpg,png}',
        dest: 'dest/images/',
        options: {
            // preset: 'picture', // default | photo, picture, drawing, icon and text
            quality: 90, // 75 | 0 - 100
            // alphaQuality: 100, // 100 | transparency-compression quality 0 - 100
            // method: 6, // 4 | 0 (fastest) - 6 (slowest). This parameter controls the trade off between encoding speed and the compressed file size and quality.
            // size: 3000, // - | Set target size in bytes.
            // sns: 80, // 80 | (amplitude of spatial noise shaping 0 - 100)
            // filter: 0, // - | deblocking filter strength 0 (off) - 100.
            // autoFilter: false, // false | Adjust filter strength automatically
            // sharpness: 0, // 0 | filter sharpness 0 (sharpest) - 7 (least sharp)
            // lossless: false, // false | Encode images losslessly
            // nearLossless: 100, // 100 | Encode losslessly with an additional lossy pre-processing step, with a quality factor 0 (maximum pre-processing) - 100 (same as lossless)
            // // crop: {}, // - | { x: number, y: number, width: number, height: number }
            // // resize: {}, // - | Happens after crop. { width: number, height: number }
            // metadata: 'none', // 'none' | 'all', 'none', 'exif', 'icc', 'xmp' (string | string[]). A list of metadata to copy from the input to the output if present.
        }
    },

    svg: {
        src: 'src/**/*.svg',
        dest: 'dest/svg/',
        options: {
            // https://github.com/svg/svgo#configuration

            // multipass: true, // boolean. false by default
            // datauri: 'base64', // 'base64' (default), 'enc' or 'unenc'.
            // js2svg: {
            //     indent: 2, // string with spaces or number of spaces. 4 by default
            //     pretty: true, // boolean, false by default
            // },
            plugins: [
                // // set of built-in plugins enabled by default
                // 'preset-default',

                {
                    name: 'preset-default',
                    params: {
                        // https://github.com/svg/svgo#built-in-plugins
                        overrides: {
                            // // customize default plugin options
                            // inlineStyles: {
                            //     onlyMatchedOnce: false,
                            // },

                            // // or disable plugins
                            // removeDoctype: false,
                        },
                    },
                },
            ],
        }
    }
}
