import React from 'react';

function About() {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="sm:flex items-center max-w-screen-xl mx-auto px-6 sm:px-10">
          <div className="sm:w-1/2 p-4">
            <div className="image object-center text-center">
              <img
               className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 w-3/4 sm:w-2/3 mx-auto"
               
                src="https://images.pexels.com/photos/5084674/pexels-photo-5084674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bookstore"
              />
            </div>
          </div>
          <div className="sm:w-1/2 p-4 sm:p-10">
            <div className="text">
              <span className="text-pink-500 border-b-4 border-purple-600 uppercase text-sm tracking-wider">
                About us
              </span>
              <h2 className="my-6 font-bold text-4xl sm:text-5xl leading-tight text-gray-800">
                About <span className="text-pink-500">Our Bookstore</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">

              Welcome to BookStore, a haven for book lovers and knowledge seekers alike. Our bookstore is more than just a place to buy books—it's a community where stories come to life, ideas flourish, and readers of all ages find their next adventure. We carefully curate a wide selection of titles, from timeless classics to contemporary bestsellers, ensuring there's something for every reader. Whether you're looking for the latest literary sensation, a hidden gem, or a thoughtful gift, our friendly and knowledgeable staff are here to help you find exactly what you need. At [Your Bookstore Name], we believe in the power of books to inspire, educate, and transform, and we're dedicated to fostering a love of reading in our community.
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
