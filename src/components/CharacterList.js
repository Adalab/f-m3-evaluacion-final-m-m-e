import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

class CharacterList extends React.Component {
  render() { 
    const {characterData, filterName} = this.props;
    return (
      <ul className="character__list">
          {characterData
          .filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
          .map(item => {
            return (
              <li className="character__list-item" key={item.id}>
                <Link to={`/characterdetails/:${item.id}`}>
                  <CharacterCard item={item} />
                </Link>
              </li>
            )
          })}
        </ul>
    );
  }
}
 
export default CharacterList;