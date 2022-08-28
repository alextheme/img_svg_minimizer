// Copyright 2018 Google LLC.
// SPDX-License-Identifier: Apache-2.0

// https://www.npmjs.com/package/imagemin-webp

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminSvgo from 'imagemin-svgo';
import params from "./params.js";

const arg = process.argv[2];

const minImages = () => {
    imagemin(
        [params.webp.src],
        {
            destination: params.webp.dest,
            plugins: [ imageminWebp(params.webp.options) ]
        });
}

const minSvg = () => {
    imagemin(
        [params.svg.src],
        {
            destination: params.svg.dest,
            plugins: [ imageminSvgo(params.svg.options) ]
        });
}

if (arg === '--all') {
    minImages();
    minSvg();
    console.log('images & svg optimized');
}

if (arg === '--webp') {
    minImages();
    console.log('images optimized');
}

if (arg === '--svg') {
    minSvg();
    console.log('svg optimized');
}
