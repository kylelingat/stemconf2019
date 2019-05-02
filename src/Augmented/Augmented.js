import React, { Component } from "react";
import  ReactDOM from 'react-dom';
import "./Augmented.css"
import { Scene, Text, Entity } from 'react-aframe-ar';
import { MarkerCamera, GltfModel, Assets, AssetItem } from "react-aframe-ar/src/primitives";

export default class Augmented extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Scene>
                {/* <Text value="Hello!" align="center" position="0 2.3 -1.5" /> */}
                
                {/* <Assets>
                    <AssetItem id='whiteBird' src='./white-bird/scene.gltf' />
                </Assets> */}
                {/* <gltfModel src='#whiteBird' />
                <MarkerCamera type='pattern' url='./pattern-marker.patt' /> */}

                <MarkerCamera type='pattern' url='./pattern-marker.patt'>
                    <GltfModel rotation='0 0 0' src='./white-bird/scene.gltf' />
                </MarkerCamera>

                <Entity camera />

            </Scene>
        );
    }
}

// ReactDOM.render(<Augmented/>, document.querySelector('#sceneContainer'));