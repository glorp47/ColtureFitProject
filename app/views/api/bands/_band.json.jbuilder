json.extract!(
band,
:username, :short_bio, :location_zip, :genre, :members, :long_bio, :id, :twitter, :facebook, :instagram
)

json.images band.images do |image|
  json.partial! 'api/images/image', image: image
end

json.albums band.albums do |album|
  json.partial! 'api/albums/album', album: album
end

json.gigs band.gigs do |gig|
  json.partial! 'api/gigs/gig', gig: gig
end

json.songs band.songs do |song|
  json.partial! 'api/songs/song', song: song
end

json.videos band.videos do |video|
  json.partial! 'api/videos/video', video: video
end
