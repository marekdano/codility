/**
 * You've built an inflight entertainment system with on-demand movie streaming.
 * 
 * Users on longer flights like to start a second movie right when their first one ends, 
 * but they complain that the plane usually lands before they can see the ending. 
 * So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.
 * 
 * Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) 
 * and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
 * 
 * When building your function:
 * 
 * 		Assume your users will watch exactly two movies
 * 		Don't make your users watch the same movie twice
 * 		Optimize for runtime over memory
 */

// COMPLEXITY
// O(n) time, and O(n)O(n) space.

const canTwoMoviesFillFlight = (movieLengths, flightLength) => {
	// Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

		const matchingSecondMovieLength = flightLength - firstMovieLength;
		
		// users won't watch the same movie twice because we check movie_lengths_seen 
		// for matching_second_movie_length before we've put first_movie_length in it!
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
};

module.exports = canTwoMoviesFillFlight;