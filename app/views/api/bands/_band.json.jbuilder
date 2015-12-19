json.extract!(
band,
:username, :short_bio, :location_zip, :discography, :genre, :members, :long_bio, :id
)

json.images band.images do |image|
  json.partial! 'api/images/image', image: image
end

json.albums band.albums do |album|
  json.partial! 'api/albums/album', album: album
end

json.bookings band.bookings do |booking|
  json.partial! partial: 'gigs/gig', gig: booking.gig
end

json.songs band.songs do |song|
  json.partial! 'api/songs/song', song: song
end

json.videos band.videos do |video|
  json.partial! 'api/videos/video', video: video
end
