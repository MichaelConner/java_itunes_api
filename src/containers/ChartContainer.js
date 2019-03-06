import React, {Component} from 'react';
import ChartSelector from '../components/ChartSelector';
import ChartDetail from '../components/ChartDetail';


class ChartContainer extends Component{
    constructor(props){
        super(props);
        this.state = { 
            songs: []
        };
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

componentDidMount(url) {
    this.loadSongs(this.props.genres[0].url)
}

loadSongs(url){
    fetch(url)
        .then(res => res.json())
        .then(data => this.setState({songs: data}))
    }

handleSelectChange(event){
    this.loadSongs(event.target.value)
}

render(){
    return (
        <div>
            <h2>Chart</h2>
            <ChartSelector 
                genres={this.props.genres} 
                handleSelectChange={this.handleChartSelected} />
            <ChartDetail 
                songs = {this.state.songs}
                url = {this.props.genres[0].url}
                handleSelectChange = {this.handleSelectChange}
             />
        </div>
        )
    }      
};

export default ChartContainer;