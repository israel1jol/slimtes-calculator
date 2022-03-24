import React from "react";

export const useStandardButtonSet = () => {
    return [
        [
            {name:"MC", func:"", type:"regular"},
            {name:"MR", func:"", type:"regular"},
            {name:"M+", func:"", type:"regular"},
            {name:"M-", func:"", type:"regular"},
            {name:"MS", func:"", type:"regular"},
        ],
        [
            {name:"%", func:"reminder", type:"regular"},
            {name:"CE", func:"", type:"regular"},
            {name:"C", func:"clear", type:"regular"},
            {name:"x", func:"backspace", type:"right-regular backspace"}
        ],
        [
            {name:"1/x", func:"one-fraction", type:"regular"},
            {name:"x2", func:"square", type:"regular"},
            {name:"2?x", func:"root", type:"regular"},
            {name:"/", func:"make-division", type:"right-regular"}
        ],
        [
            {name:"7", func:"add-to-state", type:"num"},
            {name:"8", func:"add-to-state", type:"num"},
            {name:"9", func:"add-to-state", type:"num"},
            {name:"x", func:"make-multiplication", type:"right-regular"}
        ],
        [
            {name:"4", func:"add-to-state", type:"num"},
            {name:"5", func:"add-to-state", type:"num"},
            {name:"6", func:"add-to-state", type:"num"},
            {name:"+", func:"make-addition", type:"right-regular"}
        ],
        [
            {name:"1", func:"add-to-state", type:"num"},
            {name:"2", func:"add-to-state", type:"num"},
            {name:"3", func:"add-to-state", type:"num"},
            {name:"-", func:"make-subtraction", type:"right-regular"}
        ],
        [
            {name:"00", func:"add-to-state", type:"regular"},
            {name:"0", func:"add-to-state", type:"num"},
            {name:".", func:"add-to-state", type:"num"},
            {name:"=", func:"get-result", type:"big-button"}
        ]
    ]
}

export const useScientificButtonSet = () => {
    return[ 
    [
        {name:"sin", func:"sine", type:"regular"},
        {name:"cos", func:"cosine", type:"regular"},
        {name:"tan", func:"tangent", type:"regular"},
        {name:"In", func:"lin", type:"regular"},
        {name:"log", func:"logarithmBase10", type:"regular"},
    ],
    [
        {name:"()", func:"bracket", type:"regular"},
        {name:"%", func:"reminder", type:"regular"},
        {name:"CE", func:"", type:"regular"},
        {name:"C", func:"clear", type:"regular"},
        {name:"x", func:"backspace", type:"right-regular backspace"}
    ],
    [
        {name:"Gra", func:"", type:"regular"},
        {name:"1/x", func:"one-fraction", type:"regular"},
        {name:"x2", func:"square", type:"regular"},
        {name:"2?x", func:"root", type:"regular"},
        {name:"/", func:"make-division", type:"right-regular"}
    ],
    [
        {name:"Rad", func:"", type:"regular"},
        {name:"7", func:"add-to-state", type:"num"},
        {name:"8", func:"add-to-state", type:"num"},
        {name:"9", func:"add-to-state", type:"num"},
        {name:"x", func:"make-multiplication", type:"right-regular"}
    ],
    [
        {name:"pi", func:"pi", type:"regular"},
        {name:"4", func:"add-to-state", type:"num"},
        {name:"5", func:"add-to-state", type:"num"},
        {name:"6", func:"add-to-state", type:"num"},
        {name:"+", func:"make-addition", type:"right-regular"}
    ],
    [
        {name:"e", func:"", type:"regular"},
        {name:"1", func:"add-to-state", type:"num"},
        {name:"2", func:"add-to-state", type:"num"},
        {name:"3", func:"add-to-state", type:"num"},
        {name:"-", func:"make-subtraction", type:"right-regular"}
    ],
    [
        {name:"x^y", func:"reminder", type:"regular"},
        {name:"&", func:"add-to-state", type:"regular"},
        {name:"0", func:"add-to-state", type:"num"},
        {name:".", func:"add-to-state", type:"num"},
        {name:"=", func:"get-result", type:"big-button"}
    ]
]
}

export const useCConverterButtonSet = () => {

}