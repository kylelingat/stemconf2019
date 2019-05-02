import React, { Component } from "react";
import  ReactDOM from 'react-dom';
import "./Augmented.css"
import { Scene, Text, gltfModel } from 'react-aframe-ar';
import { MarkerCamera, gltfModel, Assets } from "react-aframe-ar/src/primitives";

export default class Augmented extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Scene>
                {/* <Text value="Hello!" align="center" position="0 2.3 -1.5" /> */}
                
                <Assets>
                    <AssetItem id='whiteBird' src='./white-bird/scene.gltf' />
                </Assets>
                <gltfModel src='#whiteBird' />
                <MarkerCamera type='pattern' url='./pattern-marker.patt' />
           
            </Scene>
        );
    }
}

ReactDOM.render(<Augment/>, document.querySelector('#sceneContainer'));