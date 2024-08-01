import React from 'react'

export default function About() {
    return (
      <div className="max-w-6xl mx-auto p-3 space-y-4">
          <h1 className="text-2xl font-medium text-amber-600 mb-4 text-center">About</h1>
          <h4 className="text-md font-medium text-amber-600 mb-2">CinemaDb - Your Ultimate Movie Database</h4>
          <p className="mb-4">
              Welcome to CinemaDb, the premiere destination for movie lovers! Just like IMDb, CinemaDb provides a 
              comprehensive and immersive experience for anyone passionate about films and the entertainment industry. 
              Dive into the world of cinema with our extensive database, featuring detailed information about your favorite movies.
          </p>
  
          <h4 className="text-md font-medium text-amber-600 mb-2">Discover and Explore</h4>
          <ul className="pl-5 mb-4">
              <li className="mb-2"><strong>Movies and TV Shows:</strong> From blockbusters to indie gems, explore a vast collection of movies and TV shows. Find everything from the latest releases to timeless classics.</li>
              <li className="mb-2"><strong>Detailed Information:</strong> Get in-depth details about each title, including plot summaries, cast and crew, genres, release dates, and user ratings.</li>
              <li className="mb-2"><strong>Trailers and Clips:</strong> Watch trailers, behind-the-scenes clips, and exclusive interviews to get a glimpse of the magic behind your favorite films and shows.</li>
          </ul>
  
          <h4 className="text-md font-medium text-amber-600 mb-2">Connect and Engage</h4>
          <ul className="pl-5 mb-4">
              <li className="mb-2"><strong>User Reviews and Ratings:</strong> Share your thoughts and read reviews from other movie enthusiasts. Rate your favorite movies and TV shows to help others discover great content.</li>
              <li className="mb-2"><strong>Forums and Discussions:</strong> Join lively discussions and connect with other fans in our forums. Discuss plot twists, favorite scenes, and everything in between.</li>
              <li className="mb-2"><strong>Personalized Recommendations:</strong> Based on your viewing history and ratings, get personalized movie and TV show recommendations to ensure you never run out of great content to watch.</li>
          </ul>
          <p className="mb-4">
          CinemaDB a is dedicated to bringing the world of entertainment to your fingertips. Whether you’re a casual viewer
            or a hardcore cinephile, we have everything you need to satisfy your movie cravings. 
            Explore, connect, and enjoy the cinematic experience with MovieMania!
          </p>
      </div>
    )
}
