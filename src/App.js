import React from 'react';
import './App.css';
import Button from './components/Button';
import Status from './components/Status';

class App extends React.Component {
  state = {
    brewing: false,
    actions: ['Ready to brew']
  }

  startBrew = (drinkName) => {
    if(this.state.brewing) {
      return false;
    } else {
      this.setState({
        brewing: true,
        actions: [...this.state.actions, `Brewing ${drinkName}`]
      });
      return true;
    }
  }

  finishBrewing = () => {
    this.setState({
      brewing: false,
      actions: [...this.state.actions, 'Done! Ready to brew']
    });
  }

  addAction = (action) => {
    this.setState({
      actions: [...this.state.actions, action]
    });
  }

  boilWater = (callback) => {
    this.addAction('Boiling water');
    setTimeout(() => {
      callback();
    }, 2000);
  }

  pourDrinkIntoCup = (callback) => {
    this.addAction('Pouring drink into cup');
    setTimeout(() => {
      callback();
    }, 2000);
  }
  
  makeLemonTea = () => {
    if(!this.startBrew('lemon tea')) return;

    this.boilWater(()=>{
      this.addAction('Steeping ingredients');
      setTimeout(() => {
        this.pourDrinkIntoCup(()=>{
          this.addAction('Adding lemon');
          setTimeout(() => {
            this.finishBrewing();
          }, 2000);
        });
      }, 2000);
    });
  }

  makeCoffee = () => {
    if(!this.startBrew('coffee')) return;

    this.boilWater(()=>{
      this.addAction('Brewing coffee grounds');
      setTimeout(() => {
        this.pourDrinkIntoCup(()=>{
          this.addAction('Adding sugar');
          setTimeout(() => {
            this.addAction('Adding milk');
            setTimeout(() => {
              this.finishBrewing();
            }, 2000);
          }, 2000);
        });
      }, 2000);
    });
  }

  makeChocolate = () => {
    if(!this.startBrew('chocolate')) return;
    
    this.boilWater(()=>{
      this.addAction('Adding chocolate powder');
      setTimeout(() => {
        this.pourDrinkIntoCup(this.finishBrewing);
      }, 2000);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container h-100 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4">BREW MAKER 9000</h1>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12 col-sm-4 mb-3 mb-sm-0">

              <Button clicked={this.makeLemonTea} text="LEMON TEA" />

            </div>
            <div className="col-12 col-sm-4 mb-3 mb-sm-0">

              <Button clicked={this.makeCoffee} text="COFFEE" />

            </div>
            <div className="col-12 col-sm-4">

              <Button clicked={this.makeChocolate} text="CHOCOLATE" />

            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">

              <Status title={this.state.actions[this.state.actions.length-1]} actions={this.state.actions} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;