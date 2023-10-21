import React, { Component } from 'react';

class Same extends Component {
  state = {
    show: false,
    person: {
      fullName: "Rewaa Yasser",
      bio: "I'm a full-stack web developer",
      imgSrc: "https://example.com/profile.jpg",
      profession: "Web Development"
    }
  };

  Show = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { show, person } = this.state;

    return (
      <div>
        <button className=' bg-amber-700 w-64' onClick={this.Show}>Show Profile</button>
        {show && (
          <div className=' bg-slate-800 w-64 h-40 p-2 text-white'>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc}  />
            <p>{person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Same;