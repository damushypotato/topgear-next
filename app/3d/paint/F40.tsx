/* Ferrari F40 3D model
-----------------------
Author: Black Snow (https://sketchfab.com/BlackSnow02)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ferrari-f40-52a66c41cfcd4f999fb1b1c49bf24d70
Title: Ferrari f40
--------------------*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { ColourSelection, GLTFResult } from '@/app/types/definitions';
import { Color } from 'three';

export default function F40({
    colour,
    ...props
}: { colour: ColourSelection } & JSX.IntrinsicElements['group']) {
    // load the car model
    const { nodes, materials }: GLTFResult = useGLTF('/ferrari_f40.glb') as any;

    // set the colour of the car
    materials.material.color = new Color(colour.colour);
    if (colour.roughness) materials.material.roughness = colour.roughness;
    if (colour.metalness) materials.material.metalness = colour.metalness;

    // turn on the headlights
    materials.super_headlight.emissive.set('white');
    materials.super_headlight.emissiveIntensity = 25;

    // turn on the tail lights
    materials.super_brakelight.emissive.set('red');
    materials.super_brakelight.emissiveIntensity = 5;

    return (
        // car model geometry
        <group dispose={null} {...props}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.F40_Carbon}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.F40_GridD}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.F40_Headlights}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.F40_Sheft}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials['F40_Window.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.super_brakelight}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.super_reverselight}
                />
                {/* body */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.material}
                ></mesh>
                {/* body */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.material}
                ></mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_11.geometry}
                    material={materials.F40_Brake}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_12.geometry}
                    material={materials.F40_Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_13.geometry}
                    material={materials.F40_Chrome}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_14.geometry}
                    material={materials['F40_Chrome.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_15.geometry}
                    material={materials.F40_Cockpit}
                ></mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.F40_Cockpit}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials.F40_Cockpit}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials.F40_Cockpit_HR}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_19.geometry}
                    material={materials.F40_Display}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_20.geometry}
                    material={materials.F40_Display_1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_21.geometry}
                    material={materials.F40_Estra}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_22.geometry}
                    material={materials.F40_Glass}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_23.geometry}
                    material={materials['F40_Glass.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.F40_Grid}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_25.geometry}
                    material={materials.F40_Logos}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_26.geometry}
                    material={materials.F40_Mechanics}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_27.geometry}
                    material={materials.F40_Mechanics}
                />
                {/* engine block */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_28.geometry}
                    material={materials['F40_Mechanics.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_29.geometry}
                    material={materials.F40_Pedali}
                />
                {/* rims front + rear right */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials.F40_Rrims}
                ></mesh>
                {/* rims rear left */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_31.geometry}
                    material={materials.F40_Rrims}
                ></mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.F40_Skin}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_33.geometry}
                    material={materials.F40_Strelki}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_34.geometry}
                    material={materials.F40_Tappetini}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials.F40_Vehiclelight}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_36.geometry}
                    material={materials.F40_Window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_37.geometry}
                    material={materials['Scene_-_Root.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={materials['Scene_-_Root.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_39.geometry}
                    material={materials['Scene_-_Root.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_40.geometry}
                    material={materials['Scene_-_Root.002']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_41.geometry}
                    material={materials.super_gauges}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_42.geometry}
                    material={materials.super_headlight}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_43.geometry}
                    material={materials.super_signal_L}
                />
            </group>
        </group>
    );
}

// preload the car model
useGLTF.preload('/ferrari_f40.glb');
