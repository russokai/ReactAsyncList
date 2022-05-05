import React from 'react';

export default function AlbumList({ Albums }) {
  return <div className='album-list'>
    { 
      Albums.map(Album => 
        <div className="album" key={Album.Title + Album.Title}>
          <h2>Title: {Album.Title}</h2>
          <h3>Artist(s): {Album.Title}</h3>
          <p>Released: {Album.ReleaseDate}</p>
          <p>Genre: {Album.Genre} </p>
        </div>
      )
    }

  </div>;
}