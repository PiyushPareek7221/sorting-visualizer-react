import React, { Component } from 'react'
import Print from '../Display/Print';
import { mergeSort, bubbleSort } from '../SortingAlgorithms/SortingAlgorithms';
import './SortingVisualizer.css'
export default class SortingVisualizer extends Component {
    
    constructor({props}){
        super(props);
        this.state = {
            array:[]
        }
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i=0;i<350;i++){
            array.push(Math.floor(Math.random()*650 + 5));
            console.log(array[i]);
        }
        this.setState({array});
    }

    mergeSort(){
        const sortedArray = mergeSort(this.state.array);
        this.setState({array:sortedArray});
    }
    
    bubbleSort(){
        const sortedArray  = bubbleSort(this.state.array);
        this.setState({array:sortedArray})
    }


    quickSort(){
        
    }
    render() {

        const {array} = this.state;

        return (
            <div className='array-container'>
                <Print array={array}/>
                <button onClick={()=>(this.resetArray())}>Genrate New Array</button>
                <button onClick={()=>(this.mergeSort())}>Merege Sort</button>
                <button onClick={()=>(this.quickSort())}>Quick Sort</button>
                <button onClick={()=>(this.bubbleSort())}>Bubble Sort</button>
            </div>
        )
    }
}
